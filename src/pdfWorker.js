import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?worker";

pdfjsLib.GlobalWorkerOptions.workerPort = new pdfjsWorker();
