<template>
  <div id="magazine_main">
    <!-- Top banner placeholder -->
    <div class="centered hp_slide1 gap_bottom padding_top">
      <div id="hp_top_banner">
        <div class="trg_banner bannerCls show_in_desktop" style="position:relative; z-index:1;">
          <a target="_blank" rel="nofollow" href="#">
            <img alt="" style="width:100%; height:260px; object-fit: cover;" :src="topBannerUrl">
          </a>
        </div>
      </div>

      <div class="hp_head_order">
        <div class="hp_grid">
          <div class="main_side">
            <!-- Head main article -->
            <div class="gap_bottom_head">
              <section class="mgz_widget widget_head_main_articles mbl_section mbl_section_no_main head_articles">
                <ArticleCard
                  v-if="headArticle"
                  :variant="'head'"
                  :position="1"
                  :link="headArticle.link"
                  :image-url="headArticle.imageUrl"
                  :category-label="headArticle.categoryLabel"
                  :category-color="headArticle.categoryColor"
                  :title="headArticle.title"
                  :subtitle="headArticle.subtitle"
                  :date="headArticle.date"
                  :author="headArticle.author"
                />
              </section>
            </div>

            <!-- List of articles -->
            <div class="gap_bottom2">
              <section class="mgz_widget widget_head_main_articles mbl_section mbl_section_no_main head_articles">
                <ArticleCard
                  v-for="(article, idx) in listArticles"
                  :key="article.id"
                  :variant="'list'"
                  :position="idx + 1"
                  :link="article.link"
                  :image-url="article.imageUrl"
                  :category-label="article.categoryLabel"
                  :category-color="article.categoryColor"
                  :title="article.title"
                  :subtitle="article.subtitle || ''"
                  :date="article.date"
                  :author="article.author"
                  picture-radius="mbl_radius"
                />
              </section>
            </div>
          </div>

          <!-- Left side column (most viewed + newsletter + banners) simplified -->
          <div class="left_side">
            <section class="mgz_widget hp_more_items mbl_list">
              <ArticleCard
                v-for="(mv, idx) in mostViewed"
                :key="mv.id"
                :variant="'mostViewed'"
                :position="idx + 1"
                :link="mv.link"
                :image-url="mv.imageUrl"
                :category-label="mv.categoryLabel"
                :category-color="mv.categoryColor"
                :title="mv.title"
                :date="mv.date"
                :author="mv.author"
              />
            </section>

            <div class="gap_bottom columns">
              <div class="newsletter box small" id="newsletter_widget">
                <form @submit.prevent>
                  <div class="text">
                    <h3>הצטרפו לניוזלטר של מרכז הנדל"ן</h3>
                    <div class="short_text">וקבלו עדכונים חמים ישירות למייל</div>
                  </div>
                  <ul>
                    <li>
                      <input type="text" name="first_name" placeholder="שם פרטי">
                      <input type="text" name="last_name" placeholder="שם משפחה">
                    </li>
                    <li>
                      <input type="email" name="email" placeholder="כתובת מייל" required>
                    </li>
                  </ul>
                  <li class="check"><input type="checkbox" required><span> אני מאשר/ת קבלת דיוור </span></li>
                  <li class="sumbit_container"><input class="submit" type="submit" value="שליחה"></li>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Below sections banner placeholder -->
    <div class="centered gap_bottom">
      <div class="trg_banner bannerCls show_in_desktop" style="position:relative; z-index:1;">
        <a target="_blank" rel="nofollow" href="#">
          <img alt="" style="width:100%; height:200px; object-fit: cover;" :src="sectionsBannerUrl">
        </a>
      </div>
    </div>
  </div>
  
</template>

<script>
import { computed } from 'vue'
import ArticleCard from '@/components/ArticleCard.vue'
import { getHeadArticle, getListArticles, getMostViewed, getBanners } from '@/data/articles'

export default {
  name: 'MainContent',
  components: { ArticleCard },
  setup() {
    const headArticle = computed(() => getHeadArticle())
    const listArticles = computed(() => getListArticles())
    const mostViewed = computed(() => getMostViewed())
    const { top: topBannerUrl, sections: sectionsBannerUrl } = getBanners()

    return {
      headArticle,
      listArticles,
      mostViewed,
      topBannerUrl,
      sectionsBannerUrl
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@/styles/variables.scss" as *;

#magazine_main {
  .centered {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .hp_grid {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 30px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }
  .main_side {
    display: flex;
    flex-direction: column;
  }
  .left_side {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .newsletter.box.small {
    background: $white;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    form {
      display: block;
      .text {
        margin-bottom: 10px;
        h3 { font-size: 18px; color: $black; margin-bottom: 5px; }
        .short_text { font-size: 14px; color: rgba($black, 0.75); }
      }
      ul { list-style: none; display: grid; gap: 10px; }
      input[type="text"], input[type="email"] {
        width: 100%;
        border: 1px solid $light-grey;
        border-radius: 8px;
        padding: 10px 12px;
        font-size: 14px;
      }
      .check { display: flex; align-items: center; gap: 8px; margin: 8px 0; }
      .submit { background: $purple-main; color: $white; border: none; border-radius: 8px; padding: 10px 14px; cursor: pointer; }
    }
  }
}
</style>


