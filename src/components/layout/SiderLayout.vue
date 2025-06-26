<script setup lang="ts">
import { NIcon, type MenuOption } from 'naive-ui'
import { Icon } from '@iconify/vue'

const activeKey = ref<string | null>(null)
const collapsed = ref(false)

const menuOptions: MenuOption[] = [
  {
    label: '首页',
    key: 'homepage',
    icon: renderIcon('carbon:home'),
  },
  {
    label: '系统管理',
    key: 'system-management',
    icon: renderIcon('carbon:cloud-service-management'),
    children: [
      {
        label: '用户管理',
        key: 'user-management',
        icon: renderIcon('carbon:id-management'),
      },
      {
        label: '角色管理',
        key: 'role-management',
        icon: renderIcon('carbon:user-role'),
      },
      {
        label: '菜单管理',
        key: 'menu-management',
        icon: renderIcon('carbon:menu'),
      },
    ],
  },
]

function renderIcon(icon: string) {
  return () => h(NIcon, null, { default: () => h(Icon, { icon }) })
}
</script>

<template>
  <NLayoutSider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <NMenu
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      class="w-full"
    />
  </NLayoutSider>
</template>

<style scoped></style>
