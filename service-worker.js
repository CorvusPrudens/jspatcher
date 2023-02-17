/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-43d32f61'], (function (workbox) { 'use strict';

  workbox.setCacheNameDetails({
    prefix: "JSPatcher"
  });
  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "_7062.js/05856a3f57975b2d358c.worklet.js",
    "revision": null
  }, {
    "url": "_fd2b.js/05856a3f57975b2d358c.worklet.js",
    "revision": null
  }, {
    "url": "assets/00aa018e3ae78d50160b.ttf",
    "revision": null
  }, {
    "url": "assets/08eb0932dc2145b3f6b2.woff",
    "revision": null
  }, {
    "url": "assets/0d0882bc6997a213dace.woff",
    "revision": null
  }, {
    "url": "assets/1d2ca94dfba6f8d87cfd.woff",
    "revision": null
  }, {
    "url": "assets/1fd1d41f8c400da7af75.woff",
    "revision": null
  }, {
    "url": "assets/21b3848a32fce5b0f501.woff2",
    "revision": null
  }, {
    "url": "assets/278156e41e0ad908cf7f.woff2",
    "revision": null
  }, {
    "url": "assets/34b49f334f41cea8e365.woff2",
    "revision": null
  }, {
    "url": "assets/353a3bb93ba34c9b0476.woff2",
    "revision": null
  }, {
    "url": "assets/38c6d8bab26db77d8c80.woff2",
    "revision": null
  }, {
    "url": "assets/3e22a5367c2e68d6e4ba.woff2",
    "revision": null
  }, {
    "url": "assets/3e6b99809852a8290c42.woff",
    "revision": null
  }, {
    "url": "assets/3fdee263fe69b843601f.woff",
    "revision": null
  }, {
    "url": "assets/425399f81e4ce7cbd967.woff",
    "revision": null
  }, {
    "url": "assets/46957bf0a71db5883313.woff2",
    "revision": null
  }, {
    "url": "assets/5367103510b27b784827.ttf",
    "revision": null
  }, {
    "url": "assets/546b4809e90728a64a4f.woff",
    "revision": null
  }, {
    "url": "assets/598d09137818c7135a24.woff",
    "revision": null
  }, {
    "url": "assets/5b824a726edcf6642539.woff",
    "revision": null
  }, {
    "url": "assets/62a9c838c99d073c7ba6.woff",
    "revision": null
  }, {
    "url": "assets/62d9dae4e0040e81c980.svg",
    "revision": null
  }, {
    "url": "assets/65a2fb6d9aaa164b41a0.ttf",
    "revision": null
  }, {
    "url": "assets/6729d29753e000c17489.svg",
    "revision": null
  }, {
    "url": "assets/687a4990ea22bb1a49d4.woff2",
    "revision": null
  }, {
    "url": "assets/6ae7abff1b20614e4a70.woff2",
    "revision": null
  }, {
    "url": "assets/6cfa65c63939188f33ef.woff",
    "revision": null
  }, {
    "url": "assets/6d20cff5b3255dd0078f.woff2",
    "revision": null
  }, {
    "url": "assets/73d2c04510d153b6da52.woff2",
    "revision": null
  }, {
    "url": "assets/752905fa5edf21fc52a1.eot",
    "revision": null
  }, {
    "url": "assets/75614cfcfedd509b1f7a.woff2",
    "revision": null
  }, {
    "url": "assets/75f024ce11d1fb961e8c.woff2",
    "revision": null
  }, {
    "url": "assets/7d1b926dcecd9fd7425e.woff",
    "revision": null
  }, {
    "url": "assets/848f3a6e80058194c450.woff",
    "revision": null
  }, {
    "url": "assets/863985d67436f8342e2d.woff2",
    "revision": null
  }, {
    "url": "assets/89b618086a797a8be0f4.woff",
    "revision": null
  }, {
    "url": "assets/8ea310a0c29539324b47.woff",
    "revision": null
  }, {
    "url": "assets/99f63ae7a743f21ab308.png",
    "revision": null
  }, {
    "url": "assets/9ba7233345056c919454.woff",
    "revision": null
  }, {
    "url": "assets/9c4845b4b41ef40a22fa.svg",
    "revision": null
  }, {
    "url": "assets/a01e3f2d6c83dc3aee17.eot",
    "revision": null
  }, {
    "url": "assets/a071abba7e9bd90947f7.woff2",
    "revision": null
  }, {
    "url": "assets/a6069540692725c247f1.woff2",
    "revision": null
  }, {
    "url": "assets/b9c017a718cdeb8538b8.woff2",
    "revision": null
  }, {
    "url": "assets/bb5de40edffdbd3ab519.woff2",
    "revision": null
  }, {
    "url": "assets/c656b8caa454ed19b9a2.ttf",
    "revision": null
  }, {
    "url": "assets/c66465590541129e82d3.woff",
    "revision": null
  }, {
    "url": "assets/cac87dc00c87a5d74711.woff",
    "revision": null
  }, {
    "url": "assets/d68fa3e67dbb653a13ce.eot",
    "revision": null
  }, {
    "url": "assets/dcb1947bf381a2824c71.woff2",
    "revision": null
  }, {
    "url": "assets/ddae9b1ba9b0b42f5880.woff",
    "revision": null
  }, {
    "url": "assets/ddf3ba7c143ea711126c.woff2",
    "revision": null
  }, {
    "url": "assets/e014213d2c1456d5f1af.woff",
    "revision": null
  }, {
    "url": "assets/e244488c8cc2f5337153.woff2",
    "revision": null
  }, {
    "url": "assets/e48918f9c91871c0ce3e.woff2",
    "revision": null
  }, {
    "url": "assets/ed49088eb627c1c0155d.woff",
    "revision": null
  }, {
    "url": "deps/ffmpeg-core.js",
    "revision": "81faf2a5276ce04cb470928d42b3273c"
  }, {
    "url": "deps/ffmpeg-core.wasm",
    "revision": "0af60f6122e7ed986f424c66381fb321"
  }, {
    "url": "deps/ffmpeg-core.worker.js",
    "revision": "71a5f91e424e40dd1861849eb5471b19"
  }, {
    "url": "deps/gen2faust.lib",
    "revision": "6024187832c1ad7af33a5103e57bcfc8"
  }, {
    "url": "deps/libGUIDOEngine.wasm",
    "revision": "42914c6132a30517e800b4e840079cb6"
  }, {
    "url": "deps/libfaust-wasm.d.cts",
    "revision": "03618e323bfe4f59d21bbeb9ed0a7070"
  }, {
    "url": "deps/libfaust-wasm.d.ts",
    "revision": "03618e323bfe4f59d21bbeb9ed0a7070"
  }, {
    "url": "deps/libfaust-wasm.data",
    "revision": "31cc63b38067985d6f724b7fe3f1664b"
  }, {
    "url": "deps/libfaust-wasm.data.d.ts",
    "revision": "efb8590a96d416771ef946b323008668"
  }, {
    "url": "deps/libfaust-wasm.js",
    "revision": "2e12de73fd5b29de368d13d4832b9eb1"
  }, {
    "url": "deps/libfaust-wasm.wasm",
    "revision": "14fcca6642d30dd07726f784e39503e9"
  }, {
    "url": "deps/libfaust-wasm.wasm.d.ts",
    "revision": "efb8590a96d416771ef946b323008668"
  }, {
    "url": "deps/libmusicxml.wasm",
    "revision": "24f31c7255007b345545a69a7d2adf82"
  }, {
    "url": "deps/primitives.lib",
    "revision": "27152c0ce5169d607ce0667196b1b858"
  }, {
    "url": "favicon.png",
    "revision": "04e837afc63d41dbe05e1d30d1b9cf13"
  }, {
    "url": "icon/icon_192.png",
    "revision": "a6ff457ac7ccf688d6a02d2c3b68b4b7"
  }, {
    "url": "icon/icon_512.png",
    "revision": "40eb5c38e88a44fc7415b3a5e3e0ce0b"
  }, {
    "url": "index.html",
    "revision": "987cc16509739c52074516f060857dd0"
  }, {
    "url": "index.js",
    "revision": "4b4fd96d147ced4b907360c750eade38"
  }, {
    "url": "js/017d998140f1ad199103.worker.js",
    "revision": null
  }, {
    "url": "js/05856a3f57975b2d358c.worklet.js",
    "revision": null
  }, {
    "url": "js/1f369371c6017e16477f.js",
    "revision": null
  }, {
    "url": "js/28c02eae3aed9f32ae1e.js",
    "revision": null
  }, {
    "url": "js/28fd68abd7dec35262fb.worker.js",
    "revision": null
  }, {
    "url": "js/2a93567b93841a79a6fe.worker.js",
    "revision": null
  }, {
    "url": "js/2d5069b2681db1b4acf5.js",
    "revision": null
  }, {
    "url": "js/2e0391304b68c9279541.js",
    "revision": null
  }, {
    "url": "js/30570496e8539e14f646.js",
    "revision": null
  }, {
    "url": "js/3193b2c8e46a54d67523.worklet.js",
    "revision": null
  }, {
    "url": "js/31d30f2bd6ae8913d7a6.js",
    "revision": null
  }, {
    "url": "js/3a7d6be8066f32aa6f3d.js",
    "revision": null
  }, {
    "url": "js/3d2e0cd02f1062ad7c15.js",
    "revision": null
  }, {
    "url": "js/455af92e7e1dc39fdbc8060f6680ab32.worker.js",
    "revision": "94fb70530ecfc00ca93a7e0117604e8c"
  }, {
    "url": "js/4a0ce4f89d491560630c.js",
    "revision": null
  }, {
    "url": "js/524ec5fc982d3d4e327e.js",
    "revision": null
  }, {
    "url": "js/52967a0e448098dcc430.worker.js",
    "revision": null
  }, {
    "url": "js/52c892690ce0b5934f50.js",
    "revision": null
  }, {
    "url": "js/5cb20b8f56fb4bab9ef1.worker.js",
    "revision": null
  }, {
    "url": "js/5d877e0ec8230eaa8931.worklet.js",
    "revision": null
  }, {
    "url": "js/6867166cf1de7d086bca.worker.js",
    "revision": null
  }, {
    "url": "js/6b1ed1bedd96f08944b0e5a8b12c4739.worker.js",
    "revision": "f22c43f1387a3b49c0f8c91de366c4af"
  }, {
    "url": "js/7a7bb4fea8ae344974ca.js",
    "revision": null
  }, {
    "url": "js/7a8b951fecafbf52eaba.worklet.js",
    "revision": null
  }, {
    "url": "js/8bcd54f0b591729ef470.worker.js",
    "revision": null
  }, {
    "url": "js/8f6f9172ff10295cd667.js",
    "revision": null
  }, {
    "url": "js/8fa2586bde2598a52f05.worker.js",
    "revision": null
  }, {
    "url": "js/a69a76f2a8d3e4f94630.worker.js",
    "revision": null
  }, {
    "url": "js/a96e3a2182789d074698.js",
    "revision": null
  }, {
    "url": "js/ae7556babf14f28a08e6.worker.js",
    "revision": null
  }, {
    "url": "js/b481f420e442bb340d72.js",
    "revision": null
  }, {
    "url": "js/b48e24c12d2496127b6583b54fc55dfe.worker.js",
    "revision": "4ea53e6a79a563498c7d30247f3af1c5"
  }, {
    "url": "js/b50fc962bc6b19240155.js",
    "revision": null
  }, {
    "url": "js/bc5c645889ef39b1fe9e.js",
    "revision": null
  }, {
    "url": "js/bc92b42113beb4749365.js",
    "revision": null
  }, {
    "url": "js/ca2e25b9e44deb9d8a4a.js",
    "revision": null
  }, {
    "url": "js/cc96c114866fadb4dd42.worklet.js",
    "revision": null
  }, {
    "url": "js/da9b5ead4848cc2777299f9d18504d8c.worker.js",
    "revision": "efff618d387ce8c7d9371d6b3ec9f9f8"
  }, {
    "url": "js/de44efc5dfdf33808316.js",
    "revision": null
  }, {
    "url": "js/e9af213515a48055d0d9.js",
    "revision": null
  }, {
    "url": "js/eaf685b3c0a73438cd37.js",
    "revision": null
  }, {
    "url": "js/fd93e30ede5ae60bb24e.js",
    "revision": null
  }, {
    "url": "manifest.json",
    "revision": "1cbaa3cdd5ba147975aa27bb8a1914f4"
  }, {
    "url": "packages/generators/index.js",
    "revision": "4e94fffe44503516f42c573823889648"
  }, {
    "url": "packages/generators/index.jspatpkg.js",
    "revision": "0aa0387131ab827709ed80eef1004ffe"
  }, {
    "url": "packages/internal-packages.json",
    "revision": "2fe7b2a4d78a4ae763964966a2f23df9"
  }, {
    "url": "packages/io/index.js",
    "revision": "d6acaf0ac8aeb88f365411064fd378ca"
  }, {
    "url": "packages/io/index.jspatpkg.js",
    "revision": "ca47c4d2928459a495f008adf368e089"
  }, {
    "url": "packages/math/index.js",
    "revision": "31344555013f94d937f6c0e765b13bde"
  }, {
    "url": "packages/math/index.jspatpkg.js",
    "revision": "4de04691475d009be85a98eb8b0a850c"
  }, {
    "url": "packages/utilities/index.js",
    "revision": "61df5f7eaca63cd3a8e0052267169eb1"
  }, {
    "url": "packages/utilities/index.jspatpkg.js",
    "revision": "039a00e8ae7ff34195b4b6eaead5c74a"
  }, {
    "url": "src_core_audio_AudioEditor_ts-src_core_audio_AudioRecorder_ts-src_core_audio_PatcherAudio_ts.js/3193b2c8e46a54d67523.worklet.js",
    "revision": null
  }, {
    "url": "src_core_image_ImageEditor_ts.js/3193b2c8e46a54d67523.worklet.js",
    "revision": null
  }, {
    "url": "src_core_image_PatcherImage_ts.js/3193b2c8e46a54d67523.worklet.js",
    "revision": null
  }, {
    "url": "src_core_text_PatcherText_ts.js/3193b2c8e46a54d67523.worklet.js",
    "revision": null
  }, {
    "url": "src_core_text_TextEditor_ts.js/3193b2c8e46a54d67523.worklet.js",
    "revision": null
  }, {
    "url": "src_core_video_PatcherVideo_ts.js/3193b2c8e46a54d67523.worklet.js",
    "revision": null
  }, {
    "url": "src_core_video_VideoEditor_ts.js/3193b2c8e46a54d67523.worklet.js",
    "revision": null
  }, {
    "url": "src_core_worklets_PatcherNode_ts.js/3193b2c8e46a54d67523.worklet.js",
    "revision": null
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=service-worker.js.map
