<script setup lang="ts"></script>

<template>
  <NLayout class="h-full">
    <NFlex vertical class="h-full">
      <HeaderLayout />
      <NLayout has-sider>
        <SiderLayout />
        <NLayout>
          <NFlex vertical size="small" class="h-full">
            <ContentLayout />
            <FooterLayout />
          </NFlex>
        </NLayout>
      </NLayout>
    </NFlex>
  </NLayout>
</template>
