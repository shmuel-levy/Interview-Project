<template>
  <div id="magazine_main">
    <!-- Centered Grid Layout -->
    <div class="centered_container">
      <div class="content_grid">
        <!-- Ad Card Section (Left) -->
        <div class="ad_section">
          <div class="ad_card">
            <img 
              src="@/styles/images/fce81dc36dbc484df5f5df58c9264a70e58b8455.png" 
              alt="Advertisement"
              class="ad_image"
            />
          </div>
          
          <!-- New Article Card Under Ad -->
          <div class="article_card_under_ad">
            <div class="article_content_under_ad">
              <div class="image_section_under_ad">
                <img 
                  src="@/styles/images/63d2c569548bcca3e09f39c763b4e81f354b9081.png" 
                  alt="Article Image"
                  class="article_image_under_ad"
                />
              </div>
              <div class="text_section_under_ad">
                <h3 class="article_title_under_ad">אושרה תוכנית העיצוב של צמח המרמן ואזורים למגדל יוקרה במתחם דפנה</h3>
                <p class="article_subtitle_under_ad">כשנתיים לאחר הזכייה במכרז דיירים, אושרה תוכנית העיצוב האדריכלי לפרויקט פינוי-בינוי במסגרתו ייהרסו במרכז ת"א 66 דירות וייבנה מגדל בן 25 קומות</p>
              </div>
            </div>
          </div>
          
          <!-- Three Image Cards Under Article -->
          <div class="three_images_container">
            <div class="single_image_card">
              <img 
                src="@/styles/images/1d939f5e91da93a4dc75c07c5f635f3a1d010597 (1).jpg" 
                alt="Image 1"
                class="single_image"
              />
              <div class="image_text">
                <p>בכירה במשרד השיכון: "הרחבת הכפר רג'ר נועדה לאפשר למשפחות מהחלק הצפוני דיור משופר"</p>
              </div>
            </div>
            <div class="single_image_card">
              <img 
                src="@/styles/images/1d939f5e91da93a4dc75c07c5f635f3a1d010597 (1).jpg" 
                alt="Image 2"
                class="single_image"
              />
              <div class="image_text">
                <p>גבאי גייסה 112 מיליון מתוך 144 מיליון שקל בגיוס לסדרת אג"ח חדשה</p>
              </div>
            </div>
            <div class="single_image_card">
              <img 
                src="@/styles/images/1d939f5e91da93a4dc75c07c5f635f3a1d010597 (1).jpg" 
                alt="Image 3"
                class="single_image"
              />
              <div class="image_text">
                <p>יש לי חדר משלי: כך תעצבו לנער המתבגר חדר פרקטי, עם טאצ' אישי ולא משעמם</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Most Viewed Articles Section (Right) -->
        <div class="most_viewed_section">
          <div class="title_container">
            <h2 class="most_viewed_title">הכתבות הנצפות ביותר</h2>
          </div>
          
          <!-- New Article Card -->
          <div class="article_card_new">
            <img 
              src="@/styles/images/1d939f5e91da93a4dc75c07c5f635f3a1d010597 (1).jpg" 
              alt="Article Image"
              class="article_image_new"
            />
            <div class="article_text_new">
              <p>מבינה מלאכותית ועד סדרה בנטפליקס: מה יכולים משווקי הנדל"ן בישראל ללמוד מהקולגות בניו יורק?</p>
            </div>
          </div>
          
          <!-- Duplicate Article Card -->
          <div class="article_card_new">
            <img 
              src="@/styles/images/1d939f5e91da93a4dc75c07c5f635f3a1d010597 (1).jpg" 
              alt="Article Image"
              class="article_image_new"
            />
            <div class="article_text_new">
              <p>מבינה מלאכותית ועד סדרה בנטפליקס: מה יכולים משווקי הנדל"ן בישראל ללמוד מהקולגות בניו יורק?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style lang="scss" scoped>
@use "@/styles/variables.scss" as *;

#magazine_main {
  .centered_container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    padding-top: 20px;
  }
  
  .content_grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 30px;
    align-items: start;
  }

  .ad_section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }

  .ad_card {
    width: 876px;
    height: 213.5px;
    border-radius: 8px;
    overflow: hidden;
    background: $white;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 4px 12px rgba(88, 6, 199, 0.15);
      transform: translateY(-2px);
    }
  }

  .ad_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .article_card_under_ad {
    width: 876px;
    height: 314px;
    border-radius: 8px;
    overflow: hidden;
    background: $white;
    margin-top: 20px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 4px 12px rgba(88, 6, 199, 0.15);
      transform: translateY(-2px);
    }
  }

  .article_content_under_ad {
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 20px;
  }

  .text_section_under_ad {
    width: 311px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 20px;

    .article_title_under_ad {
      width: 311px;
      height: 114px;
      font-family: "Futurism", sans-serif;
      font-weight: 700;
      font-style: bold;
      font-size: 32px;
      line-height: 100%;
      letter-spacing: 0%;
      text-align: right;
      color: $black;
      margin: 0 0 20px 0;
      padding: 0;
      direction: rtl;
    }

    .article_subtitle_under_ad {
      width: 311px;
      height: 108px;
      font-family: "Futurism", sans-serif;
      font-weight: 400;
      font-style: regular;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: 0%;
      text-align: right;
      color: $black;
      margin: 0;
      padding: 0;
      direction: rtl;
    }
  }

  .image_section_under_ad {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .article_image_under_ad {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .three_images_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 20px;
  }

  .single_image_card {
    width: 100%;
    height: auto;
    border-radius: 4px;
    overflow: hidden;
    background: $white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    &:hover {
      box-shadow: 0 4px 12px rgba(88, 6, 199, 0.15);
      transform: translateY(-2px);
    }
  }

  .single_image {
    width: 100%;
    height: 100px;
    object-fit: cover;
    display: block;
  }

  .image_text {
    padding: 8px;
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    p {
      font-size: 12px;
      font-weight: 400;
      color: $black;
      line-height: 1.3;
      margin: 0;
      text-align: right;
      direction: rtl;
    }
  }

  .most_viewed_section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 400px;
    margin: 0 auto;
  }

  .title_container {
    width: 292px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 12px;
    margin-bottom: 20px;
    margin: 0 auto 20px auto;
  }

  .most_viewed_title {
    font-family: "Futurism", sans-serif;
    font-weight: 700;
    font-style: bold;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: right;
    color: $black;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #5806C7;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .article_card_new {
    width: 292px;
    height: 316px;
    border-radius: 8px;
    overflow: hidden;
    background: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 7px;
    margin: 0 auto 20px auto;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 4px 12px rgba(88, 6, 199, 0.15);
      transform: translateY(-2px);
    }
  }

  .article_image_new {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    display: block;
  }

  .article_text_new {
    padding: 10px 0;
    
    p {
      font-size: 16px;
      font-weight: 500;
      color: $black;
      line-height: 1.4;
      margin: 0;
      text-align: right;
      direction: rtl;
    }
  }

  .articles_container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  // Responsive adjustments
  @media (max-width: 1200px) {
    .content_grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .ad_card {
      width: 100%;
      max-width: 876px;
      height: auto;
      aspect-ratio: 876 / 213.5;
    }
  }

  @media (max-width: 768px) {
    .content_grid {
      grid-template-columns: 1fr;
    }
    
    .most_viewed_section {
      max-width: 100%;
    }
    
    .title_container {
      width: 100%;
      max-width: 292px;
    }
    
    .most_viewed_title {
      font-size: 28px;
    }

    .article_card_new {
      width: 100%;
      max-width: 292px;
      height: auto;
      aspect-ratio: 292 / 316;
    }

    .ad_card {
      width: 100%;
      height: auto;
      aspect-ratio: 876 / 213.5;
    }
  }
}
</style>


