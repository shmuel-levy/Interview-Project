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
    variant: { type: String, default: 'list' },
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
    pictureRadius: { type: String, default: 'none' }
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
  width: 100%;
  border: 1px solid #5806C7;
  border-radius: 8px;
  overflow: hidden;
  background: $white;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(88, 6, 199, 0.15);
    transform: translateY(-2px);
  }

  .article_pic {
    position: relative;
    display: block;
    width: 100%;
    
    span {
      display: block;
      width: 100%;
      padding-top: 56.25%;
      background-size: cover;
      background-position: center;
      border-radius: 8px 8px 0 0;
    }
    
    &.bottom_border_red span {
      box-shadow: 0 4px 0 0 #5806C7 inset;
    }
    
    &.mbl_radius span {
      border-radius: 10px;
    }
    
    .article_category {
      position: absolute;
      right: 12px;
      bottom: 12px;
      background: $white;
      color: $black;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      &.big {
        font-size: 13px;
        padding: 8px 14px;
      }
    }
  }

  .content {
    padding: 16px;
    
    h3 {
      font-size: 18px;
      font-weight: 600;
      color: $black;
      margin-bottom: 8px;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    h4 {
      font-size: 14px;
      color: rgba($black, 0.8);
      line-height: 1.4;
      margin-bottom: 8px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .metadata_wrapper {
      display: flex;
      gap: 12px;
      margin-bottom: 8px;
      align-items: center;
      
      .info_item {
        font-size: 12px;
        color: rgba($black, 0.6);
        font-weight: 400;
        
        &.date {
          color: rgba($black, 0.7);
        }
        
        &.lecturer {
          color: rgba($black, 0.8);
        }
      }
    }
  }

  &.head {
    .content {
      padding: 20px;
      
      h3 {
        font-size: 22px;
        line-height: 1.3;
        margin-bottom: 12px;
      }
      
      h4 {
        font-size: 16px;
        margin-bottom: 12px;
      }
      
      .metadata_wrapper {
        margin-bottom: 12px;
        
        .info_item {
          font-size: 13px;
        }
      }
    }
  }

  &.mostViewed {
    .content {
      padding: 12px;
      
      h3 {
        font-size: 16px;
        margin-bottom: 6px;
      }
      
      .metadata_wrapper {
        margin-bottom: 6px;
        
        .info_item {
          font-size: 11px;
        }
      }
    }
  }
}
</style>


