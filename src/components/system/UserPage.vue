<script setup lang="ts">
import { NButton, type DataTableColumns } from 'naive-ui'
import { type User, type Filter } from './types'

const columns = ref<DataTableColumns<User>>([
  {
    title: '序号',
    key: 'order',
  },
  {
    title: '姓名',
    key: 'realname',
  },
  {
    title: '用户名',
    key: 'username',
  },
  {
    title: '性别',
    key: 'gender',
  },
  {
    title: '部门',
    key: 'depart',
  },
  {
    title: '手机号',
    key: 'phone',
  },
  {
    title: '邮箱',
    key: 'email',
  },
  {
    title: '住址',
    key: 'address',
  },
  {
    title: '状态',
    key: 'status',
  },
  {
    title: '操作',
    key: 'operation',
    render(row: User) {
      const button = row.status === '正常' ? '禁用' : '删除'
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
        },
        {
          default: () => button,
        },
      )
    },
  },
])

const data = ref<User[]>(
  Array.from({ length: 46 }).map((_, index) => ({
    order: index,
    realname: `Edward King ${index}`,
    username: `EdwardKing-${index}`,
    gender: `${index % 2 > 0 ? '男' : '女'}`,
    depart: `Technology Depart ${index}`,
    phone: `phone-${index}`,
    email: `email-${index}`,
    address: `London, Park Lane no. ${index}`,
    status: `${index % 2 > 0 ? '正常' : '已禁用'}`,
  })),
)

const pagination = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 20, 30],
  onChange: (page: number) => {
    pagination.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize
    pagination.page = 1
  },
})

const genderOptions = ref([
  {
    label: '请选择性别',
    value: 'gender',
    disabled: true,
  },
  {
    label: '男',
    value: '男',
  },
  {
    label: '女',
    value: '女',
  },
])
const statusOptions = ref([
  {
    label: '正常',
    value: '正常',
  },
  {
    label: '已禁用',
    value: '已禁用',
  },
  {
    label: '已删除',
    value: '已删除',
  },
])

const initialFilters: Filter = {
  realname: '',
  depart: '',
  phone: '',
  email: '',
  gender: null,
  status: null,
}
const filters = ref<Filter>({ ...initialFilters })
const filteredData = computed(() => {
  return data.value.filter((user) => {
    return (
      user.realname.includes(filters.value.realname) &&
      user.depart.includes(filters.value.depart) &&
      user.phone.includes(filters.value.phone) &&
      user.email.includes(filters.value.email) &&
      (filters.value.gender === null || user.gender === filters.value.gender) &&
      (filters.value.status === null || user.status === filters.value.status)
    )
  })
})
function onClickReset() {
  filters.value = { ...initialFilters }
}
</script>

<template>
  <NFlex vertical class="h-full">
    <NCard class="shrink-0">
      <NCollapse arrow-placement="right">
        <NCollapseItem title="搜索">
          <NForm label-placement="left">
            <NGrid :cols="24" :x-gap="24">
              <NFormItemGi label="姓名" :span="6">
                <NInput v-model:value="filters.realname" placeholder="请输入姓名" />
              </NFormItemGi>
              <NFormItemGi label="部门" :span="6">
                <NInput v-model:value="filters.depart" placeholder="请输入部门" />
              </NFormItemGi>
              <NFormItemGi label="手机号" :span="6">
                <NInput v-model:value="filters.phone" placeholder="请输入手机号" />
              </NFormItemGi>
              <NFormItemGi label="邮箱" :span="6">
                <NInput v-model:value="filters.email" placeholder="请输入邮箱" />
              </NFormItemGi>
              <NFormItemGi label="性别" :span="6">
                <NSelect
                  v-model:value="filters.gender"
                  placeholder="请选择性别"
                  :options="genderOptions"
                />
              </NFormItemGi>
              <NFormItemGi label="状态" :span="6">
                <NSelect
                  v-model:value="filters.status"
                  placeholder="请选择状态"
                  :options="statusOptions"
                />
              </NFormItemGi>
              <NFormItemGi>
                <NButton @click="onClickReset">重置</NButton>
              </NFormItemGi>
            </NGrid>
          </NForm>
        </NCollapseItem>
      </NCollapse>
    </NCard>
    <NCard title="用户列表" class="flex-1">
      <NDataTable
        :columns="columns"
        :data="filteredData"
        :pagination="pagination"
        :bordered="false"
      />
    </NCard>
  </NFlex>
</template>

<style scoped></style>
