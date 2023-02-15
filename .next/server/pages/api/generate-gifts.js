"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate-gifts";
exports.ids = ["pages/api/generate-gifts"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate-gifts.js":
/*!*************************************!*\
  !*** ./pages/api/generate-gifts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { Environment , Mood , category , color , extra , subject , lighting , Level  } = req.body;\n    const prompt = generatePrompt(Environment, Mood, category, color, extra, subject, lighting, Level);\n    console.log(prompt);\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: prompt,\n        temperature: 0.6,\n        max_tokens: 2048\n    });\n    res.status(200).json({\n        result: completion.data.choices[0].text\n    });\n}\nfunction generatePrompt(Environment, Mood, category, color, extra, subject, lighting, Level) {\n    return `You will now act as a prompt generator for a generative AI called \"Midjourney\". Midjourney AI generates images based on given prompts. \r\n\r\n  I will provide a concept and you will provide the prompt for Midjourney AI.\r\n  \r\n  The prompt you will generate will be exactly as written in the structure to the letter including the \"/\" and \":\"\r\n  This is the prompt structure: \"/imagine prompt: ${extra}, [2], [3], [4], [5], [6], [ar] [v]\"\r\n  \r\n  You will not and must not alter the structure in any way.\r\n  \r\n  ${extra}\r\n  [2] = a detailed description of ${extra} that will include very specific imagery details.\r\n  [3] = with a detailed description describing the environment of the scene.\r\n  [4] = with a detailed description describing the mood/feelings and atmosphere of the scene.\r\n  [5] = A style, for example: photography, painting, illustration, sculpture, Artwork, paperwork, 3d and more). ${extra} \r\n  [6] = A description of how [5] will be realized. (e.g. Photography (e.g. Macro, Fisheye Style, Portrait) with camera model and according settings, Painting with detailed descriptions about the materials and working material used, rendering with engine settings, a digital Illustration, a woodburn art (and everything else that could be defined as an output type)\r\n  [ar] = \"--ar 16:9\" if the image looks best horizontally, \"--ar 9:16\" if the image looks best vertically, \"--ar 1:1\" if the image looks best in a square.\r\n  [v] = If [5] looks best in a Japanese art style, \"--niji\". Else, \"--v 4\"\r\n  \r\n  you will not write the words \"description:\" or use \":\" in any form.\r\n  You will write the prompt in one line without creating new lines\r\n  \r\n  you will generate 4 prompts for each concept ${extra}, and each of your prompts will be different in its description, environment, atmosphere, and realization.\r\n  \r\n  The prompts you provide will be in English*.\r\n  \r\n  Please pay attention:\r\n  - Concepts that can't be real would not be described as \"Real\" or \"realistic\" or \"photo\" or a \"photograph\". for example, a concept which is made of paper or scenes which are fantasy related.\r\n  - One of the prompts you generate for each concept must be in realistic photographic style. you should also choose a lens type and size for it. don't choose an artist for the realistic photography prompts.\r\n  - Separate the different prompts with two new lines `;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtZ2lmdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGFBQWEsR0FBRyxJQUFJRixpREFBYSxDQUFDO0lBQ3RDRyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjO0NBQ25DLENBQUM7QUFDRixNQUFNQyxNQUFNLEdBQUcsSUFBSU4sNkNBQVMsQ0FBQ0MsYUFBYSxDQUFDO0FBRTNDLDZCQUFlLDBDQUFnQk0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsTUFBTSxFQUFFQyxXQUFXLEdBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFQyxRQUFRLEdBQUNDLEtBQUssR0FBRSxHQUFHVCxHQUFHLENBQUNVLElBQUk7SUFDdkYsTUFBTUMsTUFBTSxHQUFHQyxjQUFjLENBQUNWLFdBQVcsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBQ0MsS0FBSyxDQUFDO0lBRWpHSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7SUFFcEIsTUFBTUksVUFBVSxHQUFHLE1BQU1oQixNQUFNLENBQUNpQixnQkFBZ0IsQ0FBQztRQUMvQ0MsS0FBSyxFQUFFLGtCQUFrQjtRQUN6Qk4sTUFBTSxFQUFFQSxNQUFNO1FBQ2RPLFdBQVcsRUFBRSxHQUFHO1FBQ2hCQyxVQUFVLEVBQUUsSUFBSTtLQUNqQixDQUFDO0lBRUZsQixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxNQUFNLEVBQUVQLFVBQVUsQ0FBQ1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUk7S0FBRSxDQUFDLENBQUM7QUFDcEUsQ0FBQztBQUVELFNBQVNiLGNBQWMsQ0FBQ1YsV0FBVyxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFDQyxLQUFLLEVBQUU7SUFDMUYsT0FBTyxDQUFDO0FBNEI4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbXB0YWl4Ly4vcGFnZXMvYXBpL2dlbmVyYXRlLWdpZnRzLmpzP2ZiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxyXG59KTtcclxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgRW52aXJvbm1lbnQsIE1vb2QsIGNhdGVnb3J5LCBjb2xvciwgZXh0cmEsIHN1YmplY3QsIGxpZ2h0aW5nLExldmVsIH0gPSByZXEuYm9keTtcclxuICBjb25zdCBwcm9tcHQgPSBnZW5lcmF0ZVByb21wdChFbnZpcm9ubWVudCwgTW9vZCwgY2F0ZWdvcnksIGNvbG9yLCBleHRyYSwgc3ViamVjdCwgbGlnaHRpbmcsTGV2ZWwpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9tcHQpO1xyXG5cclxuICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xyXG4gICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxyXG4gICAgcHJvbXB0OiBwcm9tcHQsXHJcbiAgICB0ZW1wZXJhdHVyZTogMC42LFxyXG4gICAgbWF4X3Rva2VuczogMjA0OCxcclxuICB9KTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KEVudmlyb25tZW50LCBNb29kLCBjYXRlZ29yeSwgY29sb3IsIGV4dHJhICxzdWJqZWN0LCBsaWdodGluZyxMZXZlbCkge1xyXG4gIHJldHVybiBgWW91IHdpbGwgbm93IGFjdCBhcyBhIHByb21wdCBnZW5lcmF0b3IgZm9yIGEgZ2VuZXJhdGl2ZSBBSSBjYWxsZWQgXCJNaWRqb3VybmV5XCIuIE1pZGpvdXJuZXkgQUkgZ2VuZXJhdGVzIGltYWdlcyBiYXNlZCBvbiBnaXZlbiBwcm9tcHRzLiBcclxuXHJcbiAgSSB3aWxsIHByb3ZpZGUgYSBjb25jZXB0IGFuZCB5b3Ugd2lsbCBwcm92aWRlIHRoZSBwcm9tcHQgZm9yIE1pZGpvdXJuZXkgQUkuXHJcbiAgXHJcbiAgVGhlIHByb21wdCB5b3Ugd2lsbCBnZW5lcmF0ZSB3aWxsIGJlIGV4YWN0bHkgYXMgd3JpdHRlbiBpbiB0aGUgc3RydWN0dXJlIHRvIHRoZSBsZXR0ZXIgaW5jbHVkaW5nIHRoZSBcIi9cIiBhbmQgXCI6XCJcclxuICBUaGlzIGlzIHRoZSBwcm9tcHQgc3RydWN0dXJlOiBcIi9pbWFnaW5lIHByb21wdDogJHtleHRyYX0sIFsyXSwgWzNdLCBbNF0sIFs1XSwgWzZdLCBbYXJdIFt2XVwiXHJcbiAgXHJcbiAgWW91IHdpbGwgbm90IGFuZCBtdXN0IG5vdCBhbHRlciB0aGUgc3RydWN0dXJlIGluIGFueSB3YXkuXHJcbiAgXHJcbiAgJHtleHRyYX1cclxuICBbMl0gPSBhIGRldGFpbGVkIGRlc2NyaXB0aW9uIG9mICR7ZXh0cmF9IHRoYXQgd2lsbCBpbmNsdWRlIHZlcnkgc3BlY2lmaWMgaW1hZ2VyeSBkZXRhaWxzLlxyXG4gIFszXSA9IHdpdGggYSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBkZXNjcmliaW5nIHRoZSBlbnZpcm9ubWVudCBvZiB0aGUgc2NlbmUuXHJcbiAgWzRdID0gd2l0aCBhIGRldGFpbGVkIGRlc2NyaXB0aW9uIGRlc2NyaWJpbmcgdGhlIG1vb2QvZmVlbGluZ3MgYW5kIGF0bW9zcGhlcmUgb2YgdGhlIHNjZW5lLlxyXG4gIFs1XSA9IEEgc3R5bGUsIGZvciBleGFtcGxlOiBwaG90b2dyYXBoeSwgcGFpbnRpbmcsIGlsbHVzdHJhdGlvbiwgc2N1bHB0dXJlLCBBcnR3b3JrLCBwYXBlcndvcmssIDNkIGFuZCBtb3JlKS4gJHtleHRyYX0gXHJcbiAgWzZdID0gQSBkZXNjcmlwdGlvbiBvZiBob3cgWzVdIHdpbGwgYmUgcmVhbGl6ZWQuIChlLmcuIFBob3RvZ3JhcGh5IChlLmcuIE1hY3JvLCBGaXNoZXllIFN0eWxlLCBQb3J0cmFpdCkgd2l0aCBjYW1lcmEgbW9kZWwgYW5kIGFjY29yZGluZyBzZXR0aW5ncywgUGFpbnRpbmcgd2l0aCBkZXRhaWxlZCBkZXNjcmlwdGlvbnMgYWJvdXQgdGhlIG1hdGVyaWFscyBhbmQgd29ya2luZyBtYXRlcmlhbCB1c2VkLCByZW5kZXJpbmcgd2l0aCBlbmdpbmUgc2V0dGluZ3MsIGEgZGlnaXRhbCBJbGx1c3RyYXRpb24sIGEgd29vZGJ1cm4gYXJ0IChhbmQgZXZlcnl0aGluZyBlbHNlIHRoYXQgY291bGQgYmUgZGVmaW5lZCBhcyBhbiBvdXRwdXQgdHlwZSlcclxuICBbYXJdID0gXCItLWFyIDE2OjlcIiBpZiB0aGUgaW1hZ2UgbG9va3MgYmVzdCBob3Jpem9udGFsbHksIFwiLS1hciA5OjE2XCIgaWYgdGhlIGltYWdlIGxvb2tzIGJlc3QgdmVydGljYWxseSwgXCItLWFyIDE6MVwiIGlmIHRoZSBpbWFnZSBsb29rcyBiZXN0IGluIGEgc3F1YXJlLlxyXG4gIFt2XSA9IElmIFs1XSBsb29rcyBiZXN0IGluIGEgSmFwYW5lc2UgYXJ0IHN0eWxlLCBcIi0tbmlqaVwiLiBFbHNlLCBcIi0tdiA0XCJcclxuICBcclxuICB5b3Ugd2lsbCBub3Qgd3JpdGUgdGhlIHdvcmRzIFwiZGVzY3JpcHRpb246XCIgb3IgdXNlIFwiOlwiIGluIGFueSBmb3JtLlxyXG4gIFlvdSB3aWxsIHdyaXRlIHRoZSBwcm9tcHQgaW4gb25lIGxpbmUgd2l0aG91dCBjcmVhdGluZyBuZXcgbGluZXNcclxuICBcclxuICB5b3Ugd2lsbCBnZW5lcmF0ZSA0IHByb21wdHMgZm9yIGVhY2ggY29uY2VwdCAke2V4dHJhfSwgYW5kIGVhY2ggb2YgeW91ciBwcm9tcHRzIHdpbGwgYmUgZGlmZmVyZW50IGluIGl0cyBkZXNjcmlwdGlvbiwgZW52aXJvbm1lbnQsIGF0bW9zcGhlcmUsIGFuZCByZWFsaXphdGlvbi5cclxuICBcclxuICBUaGUgcHJvbXB0cyB5b3UgcHJvdmlkZSB3aWxsIGJlIGluIEVuZ2xpc2gqLlxyXG4gIFxyXG4gIFBsZWFzZSBwYXkgYXR0ZW50aW9uOlxyXG4gIC0gQ29uY2VwdHMgdGhhdCBjYW4ndCBiZSByZWFsIHdvdWxkIG5vdCBiZSBkZXNjcmliZWQgYXMgXCJSZWFsXCIgb3IgXCJyZWFsaXN0aWNcIiBvciBcInBob3RvXCIgb3IgYSBcInBob3RvZ3JhcGhcIi4gZm9yIGV4YW1wbGUsIGEgY29uY2VwdCB3aGljaCBpcyBtYWRlIG9mIHBhcGVyIG9yIHNjZW5lcyB3aGljaCBhcmUgZmFudGFzeSByZWxhdGVkLlxyXG4gIC0gT25lIG9mIHRoZSBwcm9tcHRzIHlvdSBnZW5lcmF0ZSBmb3IgZWFjaCBjb25jZXB0IG11c3QgYmUgaW4gcmVhbGlzdGljIHBob3RvZ3JhcGhpYyBzdHlsZS4geW91IHNob3VsZCBhbHNvIGNob29zZSBhIGxlbnMgdHlwZSBhbmQgc2l6ZSBmb3IgaXQuIGRvbid0IGNob29zZSBhbiBhcnRpc3QgZm9yIHRoZSByZWFsaXN0aWMgcGhvdG9ncmFwaHkgcHJvbXB0cy5cclxuICAtIFNlcGFyYXRlIHRoZSBkaWZmZXJlbnQgcHJvbXB0cyB3aXRoIHR3byBuZXcgbGluZXMgYDt9XHJcbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsIkVudmlyb25tZW50IiwiTW9vZCIsImNhdGVnb3J5IiwiY29sb3IiLCJleHRyYSIsInN1YmplY3QiLCJsaWdodGluZyIsIkxldmVsIiwiYm9keSIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-gifts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate-gifts.js"));
module.exports = __webpack_exports__;

})();