import { getPageContent } from "@/api/pageContentApi";
import { Page } from "@/types/pageTypes";

const usePage = async (pageType: Page) => {
  let googleDocId: string | undefined;
  switch (pageType) {
    case Page.Home:
      googleDocId = process.env.HOME_PAGE_GOOGLE_DOC_ID;
      break;
    case Page.News:
      googleDocId = process.env.NEWS_PAGE_GOOGLE_DOC_ID;
      break;
    case Page.Dogs:
      googleDocId = process.env.DOGS_PAGE_GOOGLE_DOC_ID;
      break;
    case Page.Cats:
      googleDocId = process.env.CATS_PAGE_GOOGLE_DOC_ID;
      break;
    case Page.SuccessStories:
      googleDocId = process.env.SUCCESS_STORIES_PAGE_GOOGLE_DOC_ID;
      break;
    case Page.Supporters:
      googleDocId = process.env.SUPPORTERS_PAGE_GOOGLE_DOC_ID;
      break;
    case Page.Donation:
      googleDocId = process.env.DONATION_PAGE_GOOGLE_DOC_ID;
      break;
    case Page.Contact:
      googleDocId = process.env.CONTACT_PAGE_GOOGLE_DOC_ID;
      break;
    case Page.Volunteer:
      googleDocId = process.env.VOLUNTEER_PAGE_GOOGLE_DOC_ID;
      break;
    case Page.AboutUs:
      googleDocId = process.env.ABOUT_US_PAGE_GOOGLE_DOC_ID;
      break;

    default:
      googleDocId = process.env.HOME_PAGE_GOOGLE_DOC_ID;
      break;
  }

  const pageContent = await getPageContent(googleDocId || "");

  return {
    pageContent,
  };
};

export { usePage };
