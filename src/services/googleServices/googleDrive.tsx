import fs from "fs";
import type { GaxiosPromise } from "gaxios";
import { google } from "googleapis";
import type { HTMLReactParserOptions } from "html-react-parser";
import parse, { Element } from "html-react-parser";
import "server-only";
import auth from "./auth";

const service = google.drive({ version: "v3", auth });

const getFileList = async () => {
  let files: { id?: string | null; name?: string | null }[]; //TODO: type
  try {
    const res = await service.files.list({
      fields: "files(id, name)",
      spaces: "drive",
    });

    files = res.data.files || [];
  } catch (error) {
    files = [];
    console.error(error);
  }
  return files;
};

const saveFile = async (fileId: string) => {
  try {
    const res = await service.files.get(
      {
        fileId,
        alt: "media",
      },
      { responseType: "stream" }
    );

    const dest = fs.createWriteStream(Date.now() + "MY_HEROSZ.jpg"); //TODO (also rename to saveImage)
    res.data.pipe(dest);
  } catch (error) {
    console.error(error);
  }
};

const htmlParserOptions: HTMLReactParserOptions = {
  /**
   * Google docs API returns HTML that causes NextJS hydration to fail.
   * E.g. empty tbody tag in tr tag.
   * These childless and styless tags are replaced with React Fragment.
   * @param domNode The current DOM Node during the parsing of the HTML content.
   * @returns Valid JSX element that replaces the domNode.
   * If no valid JSX element is returned then the domNode is not replaced.
   */
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      const isNodeEmptyAndStyless =
        Object.keys(domNode.attribs).length === 0 &&
        domNode.attribs.constructor === Object &&
        domNode.children.length === 0;
      if (isNodeEmptyAndStyless) {
        return <></>;
      }

      switch (domNode.name) {
        case "html":
          domNode.name = "div";
          break;
        case "head":
          return <></>;
        case "body":
          domNode.name = "div";
          domNode.attribs = {
            ...domNode.attribs,
            style: `${domNode.attribs.style};max-width:none;width:min-content;`,
          };
          break;

        default: // Do nothing.
          break;
      }
    }
  },
};

const getGoogleDoc = async (fileId: string) => {
  try {
    /**
     * Generic return type is unknown because of a bug. This is why casting is required.
     * https://github.com/googleapis/google-api-nodejs-client/issues/1683
     */
    const response = await (service.files.export({
      fileId,
      mimeType: "text/html",
    }) as GaxiosPromise<string>);

    const html = parse(response.data, htmlParserOptions);

    return html;
  } catch (error) {
    console.error(error);
  }
};

export { getFileList, saveFile, getGoogleDoc };
