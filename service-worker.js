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
    prefix: "DaisyBell"
  });
  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "_7062.js/c132286ca30acd582afd.worklet.js",
    "revision": null
  }, {
    "url": "_fd2b.js/c132286ca30acd582afd.worklet.js",
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
    "url": "assets/8566ef3e4459c6c0df3b.png",
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
    "revision": "71ff3e6bc076bbea018fb83aa60fbac3"
  }, {
    "url": "icon/icon_192.png",
    "revision": "0db562e8fc3bd8543bfa5cc6fe9f8298"
  }, {
    "url": "icon/icon_512.png",
    "revision": "d81129679022f303fae9732474c5b2d6"
  }, {
    "url": "index.html",
    "revision": "9e95a1bcac6cc2001d1c06c86e235f2f"
  }, {
    "url": "index.js",
    "revision": "e9f956df2ddebc020651f42d9c838e54"
  }, {
    "url": "js/04b79c2db9d67ae77054.worker.js",
    "revision": null
  }, {
    "url": "js/06832273a80a4168d494.worker.js",
    "revision": null
  }, {
    "url": "js/071ab575215dd56539a2.worklet.js",
    "revision": null
  }, {
    "url": "js/0bde6ecee5a71643ff07.js",
    "revision": null
  }, {
    "url": "js/0ceb1578ff5960c090b4.worker.js",
    "revision": null
  }, {
    "url": "js/141674154c167ad4deca.js",
    "revision": null
  }, {
    "url": "js/14f0f0753845f085093d.js",
    "revision": null
  }, {
    "url": "js/150546d525da5920ecde.js",
    "revision": null
  }, {
    "url": "js/1b76c636af2e5193061d.worker.js",
    "revision": null
  }, {
    "url": "js/2b48d30756418705e93b.js",
    "revision": null
  }, {
    "url": "js/394b08eef1a0c4bed045.js",
    "revision": null
  }, {
    "url": "js/3eb41e607527b5345cb9.js",
    "revision": null
  }, {
    "url": "js/423099607af13de7666d.js",
    "revision": null
  }, {
    "url": "js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "js/455af92e7e1dc39fdbc8060f6680ab32.worker.js",
    "revision": "94fb70530ecfc00ca93a7e0117604e8c"
  }, {
    "url": "js/52967a0e448098dcc430.worker.js",
    "revision": null
  }, {
    "url": "js/5513e8abf5c8e19bc59a.js",
    "revision": null
  }, {
    "url": "js/57cf42d62c99e9c5b0b7.js",
    "revision": null
  }, {
    "url": "js/5d877e0ec8230eaa8931.worklet.js",
    "revision": null
  }, {
    "url": "js/6b1ed1bedd96f08944b0e5a8b12c4739.worker.js",
    "revision": "f22c43f1387a3b49c0f8c91de366c4af"
  }, {
    "url": "js/7fef2d1388b45ab1de18.worker.js",
    "revision": null
  }, {
    "url": "js/867d7f89abeda02b0ea6.js",
    "revision": null
  }, {
    "url": "js/8bcd54f0b591729ef470.worker.js",
    "revision": null
  }, {
    "url": "js/957d04d22e1721655f74.js",
    "revision": null
  }, {
    "url": "js/a6fa38d33de48f57b2cf.js",
    "revision": null
  }, {
    "url": "js/b48e24c12d2496127b6583b54fc55dfe.worker.js",
    "revision": "4ea53e6a79a563498c7d30247f3af1c5"
  }, {
    "url": "js/b5d8dce887022bcc38b2.worker.js",
    "revision": null
  }, {
    "url": "js/b6471c948853c282e6b4.js",
    "revision": null
  }, {
    "url": "js/bcb2b9e247db3423306f.js",
    "revision": null
  }, {
    "url": "js/bd7d32883af83de8471a.js",
    "revision": null
  }, {
    "url": "js/c132286ca30acd582afd.worklet.js",
    "revision": null
  }, {
    "url": "js/d6b833c98d71a39ad20b.js",
    "revision": null
  }, {
    "url": "js/da9b5ead4848cc2777299f9d18504d8c.worker.js",
    "revision": "efff618d387ce8c7d9371d6b3ec9f9f8"
  }, {
    "url": "js/e082b54e5b62ebe60afe.worklet.js",
    "revision": null
  }, {
    "url": "js/e7b355262c89cdc57d86.js",
    "revision": null
  }, {
    "url": "js/ebcc5594301ab8cd1486.worker.js",
    "revision": null
  }, {
    "url": "js/f2b38a6ccd540364a82d.js",
    "revision": null
  }, {
    "url": "js/f47d4bdb2acddf16ee67.worker.js",
    "revision": null
  }, {
    "url": "js/f5f748054f8b8c557a60.js",
    "revision": null
  }, {
    "url": "manifest.json",
    "revision": "c19bbadb3ce021d92a8b4600a8537779"
  }, {
    "url": "packages/generators/index.js",
    "revision": "e27e234eac8297a7cba68d54411523e0"
  }, {
    "url": "packages/generators/index.jspatpkg.js",
    "revision": "6d463a0c959c3cadb399d32dd20b6f6f"
  }, {
    "url": "packages/internal-packages.json",
    "revision": "a58b27b3464b896244d65202109e969c"
  }, {
    "url": "packages/io/index.js",
    "revision": "5f6481926575ebf526c56c1f4d6d2d77"
  }, {
    "url": "packages/io/index.jspatpkg.js",
    "revision": "061bf776d0f571996916c597acf99a92"
  }, {
    "url": "packages/math/index.js",
    "revision": "8b6e364944d070bd6f36564f78934c1d"
  }, {
    "url": "packages/math/index.jspatpkg.js",
    "revision": "8d0f7028aa12f837dafa3236c9c59c6d"
  }, {
    "url": "packages/ui/index.js",
    "revision": "cdb7c48976af8e388ade5089f62375e0"
  }, {
    "url": "packages/ui/index.jspatpkg.js",
    "revision": "71bd2093257ca3b741d0b21c4c18f16c"
  }, {
    "url": "packages/utilities/index.js",
    "revision": "91720f7c6c9464657f9b5559ccdc54b2"
  }, {
    "url": "packages/utilities/index.jspatpkg.js",
    "revision": "8d3e559665e59d830c394c8df187856a"
  }, {
    "url": "src_core_audio_AudioEditor_ts-src_core_audio_AudioRecorder_ts-src_core_audio_PatcherAudio_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "src_core_hardware_HardwareEditor_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "src_core_hardware_Patcher_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "src_core_image_ImageEditor_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "src_core_image_PatcherImage_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "src_core_text_PatcherText_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "src_core_text_TextEditor_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "src_core_video_PatcherVideo_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "src_core_video_VideoEditor_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }, {
    "url": "src_core_worklets_PatcherNode_ts.js/43ea1bb81e79e37af208.worklet.js",
    "revision": null
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=service-worker.js.map
