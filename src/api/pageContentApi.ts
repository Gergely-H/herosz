import { getGoogleDoc } from "@/services/googleServices/googleDrive";

const getPageContent = async (pageId: string) => {
  return await getGoogleDoc(pageId);
};

export { getPageContent };
