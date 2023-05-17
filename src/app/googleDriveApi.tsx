import fs from "fs";
import { GaxiosPromise } from "gaxios";
import { google } from "googleapis";
import parse, { Element } from "html-react-parser";
import path from "path";

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "herosz-76386a807f38.json"),
  scopes: "https://www.googleapis.com/auth/drive",
});

const service = google.drive({ version: "v3", auth }); //TODO: create api service layer and inject service / hide google drive

console.log(
  "in Api.ts ________________________________________________________________________________"
);
/* const uploadFile = async (fileObject) => {
  console.log(
    "in uploadFile ________________________________________________________________________________"
  );

  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);
  const { data } = await google.drive({ version: "v3", auth }).files.create({
    media: {
      mimeType: fileObject.mimeType,
      body: bufferStream,
    },
    requestBody: {
      name: fileObject.originalname,
      parents: ["1HlpEZ0aHDUfAjfupNTWarmWOQ-AMcgJF"],
    },
    fields: "id,name",
  });
  console.log(`Uploaded file ${data.name} ${data.id}`);
}; */

const getFileList = async () => {
  let files: { id?: string | null; name?: string | null }[]; //TODO: type
  try {
    const res = await service.files.list({
      fields: "nextPageToken, files(id, name)",
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

const getDoc = async (fileId: string) => {
  try {
    const res = await (service.files.export({
      fileId,
      mimeType: "text/html",
    }) as GaxiosPromise<string>);

    const html = parse(res.data, {
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
              break;
            case "body":
              domNode.name = "div";
              domNode.attribs = {
                ...domNode.attribs,
                style: `${domNode.attribs.style};max-width:none;width:min-content;`,
              };
              break;

            default:
              break;
          }
        }
      },
    });
    // console.log(html.props);
    return html;
  } catch (error) {
    console.error(error);
  }
};

export { getFileList, saveFile, getDoc };
