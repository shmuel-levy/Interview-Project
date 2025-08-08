<template>
  <article
    class="article_block"
    :class="[
      variantClass,
      { 'no_shadow': noShadow, 'mbl_list_item': variant === 'list' }
    ]"
    :data-position="position"
  >
    <a :href="link" class="article_pic" :class="[{ bottom_border_red: showBottomBorderRed }, pictureRadiusClass]">
      <span :title="title" :style="backgroundStyle"></span>
      <label class="article_category" :class="[categoryBadgeClass]" :style="{ '--category-color': categoryColor }">
        {{ categoryLabel }}
      </label>
    </a>
    <div class="content" :class="contentClass">
      <div v-if="showMetaTop" class="metadata_wrapper">
        <p v-if="date" class="info_item date show">{{ date }}</p>
        <p v-if="author" class="info_item lecturer">{{ author }}</p>
      </div>
      <a :href="link"><h3>{{ title }}</h3></a>
      <a v-if="subtitle" :href="link"><h4>{{ subtitle }}</h4></a>
      <div v-if="!showMetaTop && (date || author)" class="metadata_wrapper">
        <p v-if="date" class="info_item date show">{{ date }}</p>
        <p v-if="author" class="info_item lecturer">{{ author }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    variant: { type: String, default: 'list' }, // 'head' | 'list' | 'mostViewed'
    position: { type: [Number, String], default: '' },
    link: { type: String, required: true },
    imageUrl: { type: String, required: true },
    categoryLabel: { type: String, required: true },
    categoryColor: { type: String, default: '#ea5619' },
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    date: { type: String, default: '' },
    author: { type: String, default: '' },
    noShadow: { type: Boolean, default: true },
    pictureRadius: { type: String, default: 'none' } // 'none' | 'mbl_radius'
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`
      }
    },
    variantClass() {
      return this.variant === 'head' ? 'head' : ''
    },
    categoryBadgeClass() {
      if (this.variant === 'head') return 'big'
      return ''
    },
    contentClass() {
      return this.variant === 'head' ? '' : ''
    },
    showBottomBorderRed() {
      return true
    },
    showMetaTop() {
      return this.variant === 'head'
    },
    pictureRadiusClass() {
      return this.pictureRadius === 'mbl_radius' ? 'mbl_radius' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@/styles/variables.scss" as *;

.article_block {
  display: block;
  .article_pic {
    position: relative;
    display: block;
    span {
      display: block;
      width: 100%;
      padding-top: 56.25%;
      background-size: cover;
      background-position: center;
      border-radius: 10px;
    }
    &.bottom_border_red span {
      box-shadow: 0 4px 0 0 $orange-main inset;
    }
    &.mbl_radius span {
      border-radius: 10px;
    }
    .article_category {
      position: absolute;
      right: 10px;
      bottom: 10px;
      background: var(--white);
      color: var(--black);
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 12px;
      &.big {
        font-size: 13px;
      }
    }
  }

  .content {
    padding-top: 10px;
    h3 {
      font-size: 20px;
      color: $black;
      margin-bottom: 6px;
      line-height: 1.3;
    }
    h4 {
      font-size: 16px;
      color: rgba($black, 0.85);
      line-height: 1.4;
    }
    .metadata_wrapper {
      display: flex;
      gap: 10px;
      margin-bottom: 8px;
      .info_item {
        font-size: 12px;
        color: rgba($black, 0.7);
      }
    }
  }
}
</style>


