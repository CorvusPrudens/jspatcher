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
define(['./workbox-d5785303'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
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
    "url": "deps/libfaust-wasm.data",
    "revision": "de19fa60508ea9133b92e4eed9df67f4"
  }, {
    "url": "deps/libfaust-wasm.wasm",
    "revision": "22e2c29eed31c67475007b4511392f66"
  }, {
    "url": "deps/libmusicxml.wasm",
    "revision": "f2855aa8cdc4f78211ffa8273dd3025e"
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
    "revision": "e33dfe9413f21a918ed34ff80e369d57"
  }, {
    "url": "js/024c16a3edf18aee81fe.js",
    "revision": null
  }, {
    "url": "js/071091a41ad3a183f5ff.js",
    "revision": null
  }, {
    "url": "js/07e33866699bf5fd4a65.js",
    "revision": null
  }, {
    "url": "js/0a763945e9f4eb8d5543.js",
    "revision": null
  }, {
    "url": "js/13c21bf3ee3f9663ac0f.worklet.js",
    "revision": null
  }, {
    "url": "js/1c50b3e8b002743ad72c.worker.js",
    "revision": null
  }, {
    "url": "js/1cd3c2ad419a2e650c84.js",
    "revision": null
  }, {
    "url": "js/1e220086e4c1bf15fdb2.js",
    "revision": null
  }, {
    "url": "js/1f369371c6017e16477f.js",
    "revision": null
  }, {
    "url": "js/289785933bc83b00d58b.js",
    "revision": null
  }, {
    "url": "js/2d5069b2681db1b4acf5.js",
    "revision": null
  }, {
    "url": "js/2e0391304b68c9279541.js",
    "revision": null
  }, {
    "url": "js/3fb4f39a3f1a3938103d.js",
    "revision": null
  }, {
    "url": "js/455af92e7e1dc39fdbc8060f6680ab32.worker.js",
    "revision": "6c96cb396f6c37b118e729c9b96fd18d"
  }, {
    "url": "js/692f81aa5bbfa47d5dbd.js",
    "revision": null
  }, {
    "url": "js/6b1ed1bedd96f08944b0e5a8b12c4739.worker.js",
    "revision": "3cafc222030e049a264341e3d78032dc"
  }, {
    "url": "js/6ecb4cd37ed8913f29f5.worklet.js",
    "revision": null
  }, {
    "url": "js/7a7bb4fea8ae344974ca.js",
    "revision": null
  }, {
    "url": "js/935cbd49681dce055a65.worker.js",
    "revision": null
  }, {
    "url": "js/958b15db6807bc4cc9f8.js",
    "revision": null
  }, {
    "url": "js/9fafbd929f0362cda40f.worker.js",
    "revision": null
  }, {
    "url": "js/a1c117e897d3bd261728.js",
    "revision": null
  }, {
    "url": "js/a24e7b40b5bb9c187984.worker.js",
    "revision": null
  }, {
    "url": "js/a6e665684664be253825.worklet.js",
    "revision": null
  }, {
    "url": "js/a96e3a2182789d074698.js",
    "revision": null
  }, {
    "url": "js/b48e24c12d2496127b6583b54fc55dfe.worker.js",
    "revision": "f2ef4a2f6a378fed0bf7bcfd3c1976e5"
  }, {
    "url": "js/bea5dfb8a3ddf9165f79.worklet.js",
    "revision": null
  }, {
    "url": "js/c3660f0216a7135ebc0e.js",
    "revision": null
  }, {
    "url": "js/da9b5ead4848cc2777299f9d18504d8c.worker.js",
    "revision": "c7dc4aca24aa192b4e10bd83dc1aa303"
  }, {
    "url": "js/de44efc5dfdf33808316.js",
    "revision": null
  }, {
    "url": "js/e05b5ec401b9493def27.worker.js",
    "revision": null
  }, {
    "url": "js/e0c9bdbf26bd4222a0de.js",
    "revision": null
  }, {
    "url": "js/e420ff6929ac4dee4f98.worker.js",
    "revision": null
  }, {
    "url": "js/e669d9f16f8595e2df80.worklet.js",
    "revision": null
  }, {
    "url": "js/eaf685b3c0a73438cd37.js",
    "revision": null
  }, {
    "url": "js/f110948908d77213fe99.js",
    "revision": null
  }, {
    "url": "js/faa60f4cac914477448f.worker.js",
    "revision": null
  }, {
    "url": "manifest.json",
    "revision": "1cbaa3cdd5ba147975aa27bb8a1914f4"
  }, {
    "url": "packages/analysers/index.js",
    "revision": "1ebf2dc29ad8a002cfb2dd3dad1a9df8"
  }, {
    "url": "packages/analysers/index.jspatpkg.js",
    "revision": "a07d822052f82b81bf48230fbb81e078"
  }, {
    "url": "packages/cac/index.js",
    "revision": "7ec52ba9573ad70301d290898ece61c1"
  }, {
    "url": "packages/cac/index.jspatpkg.js",
    "revision": "7c92f7d1e924fcbde1c33b932edc6304"
  }, {
    "url": "packages/dsp/0b8eabfd3e90435f0b5b.wasm",
    "revision": "143a95b34e3061a2ceba01c0a782ad57"
  }, {
    "url": "packages/dsp/10e46625741cce9b60ab.wasm",
    "revision": "5b2fc1ab2da068becd9fcc861296d4c6"
  }, {
    "url": "packages/dsp/13c562d958e5e0d9c176.wasm",
    "revision": "ef9736eceb3a4474aff3749f30aa44a7"
  }, {
    "url": "packages/dsp/14a1b0b0e03afe19fe12.wasm",
    "revision": "db9f2a6a076b3229589e7cdc3efd706f"
  }, {
    "url": "packages/dsp/15ce35168b06e8277da8.wasm",
    "revision": "d85418b948b02ab7818ad06742925a88"
  }, {
    "url": "packages/dsp/15e9d939e40ef54bf74a.wasm",
    "revision": "3356445466a7b35024277eaf29cd6bf0"
  }, {
    "url": "packages/dsp/18676dec3db4ffacf4fa.wasm",
    "revision": "d9d90eac1ac5bfc4f3795b23af0b7582"
  }, {
    "url": "packages/dsp/1e7fae6afc054abd9ac8.wasm",
    "revision": "5425687aa1d42c6a85a80e2646092dc1"
  }, {
    "url": "packages/dsp/2134157c37e98545be10.wasm",
    "revision": "98257c509ba391d1458dbd36ea0666e1"
  }, {
    "url": "packages/dsp/2381a07e92b2ad98b37b.wasm",
    "revision": "afa384e5ca52d0dacd3679f1589ba9b0"
  }, {
    "url": "packages/dsp/28e8d292a399157c0390.wasm",
    "revision": "056f281cbf5f696a85f4092e09cda265"
  }, {
    "url": "packages/dsp/2ab923058b4ab2733aa4.wasm",
    "revision": "d8f94ed0666e58f09fbc4d144d691670"
  }, {
    "url": "packages/dsp/2bef3cb0e7db60c2caef.wasm",
    "revision": "c46853fc606e90856d762f16ac0b35c6"
  }, {
    "url": "packages/dsp/32cd01ba5f80cda6c966.wasm",
    "revision": "709b15161db71166ebb1c527cdc1b9aa"
  }, {
    "url": "packages/dsp/340529f9dd5b35ae7636.wasm",
    "revision": "e17b46a7d5fa3542c35e5df98b7e7576"
  }, {
    "url": "packages/dsp/348b6953f1ddc98f7958.wasm",
    "revision": "3e63dc9430fe3c0729ba2bafa2f303ae"
  }, {
    "url": "packages/dsp/36e6b651b6c9dfce56a6.wasm",
    "revision": "e77437ee6a92e9c8d83a0978d5020a5e"
  }, {
    "url": "packages/dsp/39e6aa4f571d9d21e167.wasm",
    "revision": "aecc52d2d4885d57787fa8b2f522c8a8"
  }, {
    "url": "packages/dsp/3b55185c0192f5fa4f05.wasm",
    "revision": "1f9b3489e043f7f9581c03691c5db9b8"
  }, {
    "url": "packages/dsp/43355dab800970f156df.wasm",
    "revision": "505a5e82e19662bd2c0133afe955bcf3"
  }, {
    "url": "packages/dsp/592acc789c0318a1bf69.wasm",
    "revision": "fd9b153e5a3eccbe896e9145e7b02744"
  }, {
    "url": "packages/dsp/5ccb00748a042d4f4f46.wasm",
    "revision": "3663290096e4ff38eb7a503755d52c07"
  }, {
    "url": "packages/dsp/6472ab63de9593e5e634.wasm",
    "revision": "ae9c51d190da729a1f4b9c99477ea075"
  }, {
    "url": "packages/dsp/79a3b8791c3eb54642c5.wasm",
    "revision": "1dfe418d191e84805a523c6bbba38b33"
  }, {
    "url": "packages/dsp/7b8630a799aa72fc1d1b.wasm",
    "revision": "121f942db4a1738384d13ef63d6311ad"
  }, {
    "url": "packages/dsp/7c204af5070ed911836a.wasm",
    "revision": "8773e7ce85786a8997e77e7196f3030a"
  }, {
    "url": "packages/dsp/7c8a6c9cc734c8e4b820.wasm",
    "revision": "da290d0bbc8bd7a7db46878be29ee333"
  }, {
    "url": "packages/dsp/7e7829fc455257b84c40.wasm",
    "revision": "e0ff59b89432a0c830723bb79fbe0bca"
  }, {
    "url": "packages/dsp/8337c413994e264371d2.wasm",
    "revision": "e5263a03ac2227f8b30dd9ee4a634869"
  }, {
    "url": "packages/dsp/8abe0476673413b70a5a.wasm",
    "revision": "28d9a982c933ef366b2b536a215d0b88"
  }, {
    "url": "packages/dsp/8fae341e3e9522397837.wasm",
    "revision": "58ce56ebe092f6a67fdb7226ed8c73cc"
  }, {
    "url": "packages/dsp/8fb070c17245af4efdb6.wasm",
    "revision": "54ac63602be6b7046bb20baf86f2a8a8"
  }, {
    "url": "packages/dsp/92f63bf3fc6ce4f21d7f.wasm",
    "revision": "602572999bdb9f55cf3eb6dbd88848eb"
  }, {
    "url": "packages/dsp/953875ee9d88249ff689.wasm",
    "revision": "aa4413bd15dc5a3de9dae38d5025e300"
  }, {
    "url": "packages/dsp/956be5ac39a74f3002b5.wasm",
    "revision": "5627cbc701be1c0b37b92db5a4fd788c"
  }, {
    "url": "packages/dsp/9c37f4e1fa4c77cd9600.wasm",
    "revision": "977c470d3c0a641ebfbd349e7201bf98"
  }, {
    "url": "packages/dsp/9c6361efd87e3a27ed41.wasm",
    "revision": "2fea14b2ce58b42c0a613770d9fce6c7"
  }, {
    "url": "packages/dsp/9d734a4aa2ba838aef6c.wasm",
    "revision": "211769c88a81380f0bba698c6b2ac9e8"
  }, {
    "url": "packages/dsp/a86f87b480d625e0b411.wasm",
    "revision": "941c6d6d7bad60d8790cbaf07d069dda"
  }, {
    "url": "packages/dsp/b1fdb9ae8c5e007459b3.wasm",
    "revision": "a0bbfdf1e0fff9d69fd8fe5f911525cb"
  }, {
    "url": "packages/dsp/bc577e16bd932e72d92a.wasm",
    "revision": "5a80f5944caff18c31a7da641cffc599"
  }, {
    "url": "packages/dsp/c98c83ce6218d8ac12d4.wasm",
    "revision": "a775cd66def6840d60df9429b98f7e63"
  }, {
    "url": "packages/dsp/cbcd413c3ff10753537c.wasm",
    "revision": "5817b84ae70225d6bc61945759ff4186"
  }, {
    "url": "packages/dsp/ce7abd07cd8f0fd65158.wasm",
    "revision": "b58d87e57aee5f3f4a7610208638b4eb"
  }, {
    "url": "packages/dsp/de8355caff087eb6af0f.wasm",
    "revision": "c44118b1708304220f8475d472aa8925"
  }, {
    "url": "packages/dsp/efb3416233ef0681d2f8.wasm",
    "revision": "bcb8ab0555a2bcc21eccea0a9d10dbd8"
  }, {
    "url": "packages/dsp/f3808f2a1d881be0e84c.wasm",
    "revision": "d348d5f0a28b8e8d4698d2af8aa6fcd0"
  }, {
    "url": "packages/dsp/f9adaf02b794044f6908.wasm",
    "revision": "1291d64c65914c27dd6d0e76468b5aef"
  }, {
    "url": "packages/dsp/fedc534dcc62edf38b75.wasm",
    "revision": "8cb6b9480fb01f1289ca8c10996406b1"
  }, {
    "url": "packages/dsp/index.js",
    "revision": "574d8f2fca61fdcdd9cbc7ded0b27a26"
  }, {
    "url": "packages/dsp/index.jspatpkg.js",
    "revision": "69f3eb3b38c30fe0eec4444e27fae04a"
  }, {
    "url": "packages/dsp/js/0053b421a7aa4a22ae8d.js",
    "revision": "9f7695ca57441ab213310833924f91fa"
  }, {
    "url": "packages/dsp/js/061389aa700fe93222cc.js",
    "revision": "7428c70759cc92cbdd0182c3952e64e8"
  }, {
    "url": "packages/dsp/js/085829973d16a184e581.js",
    "revision": "feb1bb5f31afd6b8bd4d7daf8c9712ba"
  }, {
    "url": "packages/dsp/js/0b9e94d6c6980b077adc.js",
    "revision": "c546745eb4f8d0a625a5a60dce1615cd"
  }, {
    "url": "packages/dsp/js/0c03c6de7ce275335b56.js",
    "revision": "f5590f02414fec6508cd36b693c64384"
  }, {
    "url": "packages/dsp/js/0d65eed8efaf26e6b6ee.js",
    "revision": "7c736bb0b5ec94f8761633bcd92fcc93"
  }, {
    "url": "packages/dsp/js/0d98b880e53095f4e8b5.js",
    "revision": "16d2e70d7903db316457357ce69b5dd8"
  }, {
    "url": "packages/dsp/js/0e895ee6791de50053bb.js",
    "revision": "3cb9c3220b1a0b4404ec14dabac0bbc9"
  }, {
    "url": "packages/dsp/js/1121a5ebe355b33da5de.js",
    "revision": "8cf5cc4dd5b7b681b8441a3367f35b8f"
  }, {
    "url": "packages/dsp/js/12133c48a2c05a2cce87.js",
    "revision": "66a1599dfbbe2878906564aa84ff3d0c"
  }, {
    "url": "packages/dsp/js/1411b5811e456c7b8a85.js",
    "revision": "0c040f3762bc5db5c2a1578a6f431fe0"
  }, {
    "url": "packages/dsp/js/14caf76091da1bbfa5a1.js",
    "revision": "5e424b3295216a5efd2da29daf9ad00b"
  }, {
    "url": "packages/dsp/js/14e2a352382d7ef2bb77.js",
    "revision": "6d6f98c0e901778ed7b3562c169e9073"
  }, {
    "url": "packages/dsp/js/14ec9ea61df8dae0a795.js",
    "revision": "d6779344312cf8b0003bcb8d25da2424"
  }, {
    "url": "packages/dsp/js/1500841eee8536170e3f.js",
    "revision": "b8b42771ae4a3e4a9651cfc12ff47078"
  }, {
    "url": "packages/dsp/js/159f299c6f4fbfe511ce.js",
    "revision": "450c02d3c69e48eb89d0373ec092db7c"
  }, {
    "url": "packages/dsp/js/16aa81541405c9176c9f.js",
    "revision": "f03c983d891fe23ed883147d46934479"
  }, {
    "url": "packages/dsp/js/17811b5924fc4bcfa2d0.js",
    "revision": "accd25bdbf28f6512bf7c4346f551876"
  }, {
    "url": "packages/dsp/js/199550099c85f5f73a4b.js",
    "revision": "2788534cda658b0968f582777e0a8846"
  }, {
    "url": "packages/dsp/js/1bd5591107bf5d19f36d.js",
    "revision": "64cec1cdad892f6362610df6d126fe1c"
  }, {
    "url": "packages/dsp/js/1d3783e006ec0a56cd38.js",
    "revision": "da598f236b568adba3f2b8d00802a351"
  }, {
    "url": "packages/dsp/js/1e700968a50412e80dbe.js",
    "revision": "44598d27e8b74b4f16c1014b8e593307"
  }, {
    "url": "packages/dsp/js/1ff62a0a82f47115a0f6.js",
    "revision": "16874b7eb03a8492b40c3ec62101d63d"
  }, {
    "url": "packages/dsp/js/201ef8f68aaecd6e06bc.js",
    "revision": "1008669d4089b1fd134ce605e720226e"
  }, {
    "url": "packages/dsp/js/205943ce972f1f0cf51f.js",
    "revision": "e6946c1abeab87e36d4d41824248f9bd"
  }, {
    "url": "packages/dsp/js/2245f9469690321f7bc4.js",
    "revision": "ecc64182425d90a078c7e97d9c3a8af5"
  }, {
    "url": "packages/dsp/js/2592ca62b24a84266184.js",
    "revision": "7ffd5e6111f5954fbd57e1bdd651d07b"
  }, {
    "url": "packages/dsp/js/2711f4fa9a20a08f5fd1.js",
    "revision": "04bfe363e01f2eaa6f242567f095b05d"
  }, {
    "url": "packages/dsp/js/2754144d946786f4459d.js",
    "revision": "c1312cc5c7b12909dc3f55b3cf1e1920"
  }, {
    "url": "packages/dsp/js/27e6a55f17c85264824b.js",
    "revision": "131acc12e6c0e18b7e0ef78e43b09870"
  }, {
    "url": "packages/dsp/js/36961c3db5868cbbef4f.js",
    "revision": "35503fa248b9a1229c9398c982f59c0e"
  }, {
    "url": "packages/dsp/js/370efb0d1ee02849f919.js",
    "revision": "0f98b557500c8cf227d094485ffa84e8"
  }, {
    "url": "packages/dsp/js/37e336166cbd304951c1.js",
    "revision": "60ef7e72590aa19d0d64040aaa88d883"
  }, {
    "url": "packages/dsp/js/381029988d6e61814dd8.js",
    "revision": "44cd0d66ba2f19db1c6177643285b408"
  }, {
    "url": "packages/dsp/js/3da35965e7fba7a06bed.js",
    "revision": "7a2a1fc1829017f44d22e7e590a57e87"
  }, {
    "url": "packages/dsp/js/427619c4c3c9f858f29e.js",
    "revision": "5dcc98d4d861acf7c3f6ca27a285ed97"
  }, {
    "url": "packages/dsp/js/42f19657f03936408587.js",
    "revision": "700ae004a52b0af6273d2a92eafeaacb"
  }, {
    "url": "packages/dsp/js/440e7ee501ec5cb3d301.js",
    "revision": "3519f5a12daf7fff3027e02f677e3be4"
  }, {
    "url": "packages/dsp/js/46eefbd4bf523e0daada.js",
    "revision": "fd2f5a6af7ffb747a81d9ac873cfadc1"
  }, {
    "url": "packages/dsp/js/489240c018cf3f9993da.js",
    "revision": "809b2ced72b52dc853da0064ca2a1edd"
  }, {
    "url": "packages/dsp/js/4b669635bed770a4f84d.js",
    "revision": "9f9ac6055bbaa6993bb1bea307a8b020"
  }, {
    "url": "packages/dsp/js/4cd9c98d910da452b060.js",
    "revision": "9c502ca641c13d9c7ab2b952280bf34a"
  }, {
    "url": "packages/dsp/js/4f2b05acbcf5c1d203ac.js",
    "revision": "609d2a7135954d0424367b9187186605"
  }, {
    "url": "packages/dsp/js/509308f23fc38caba727.js",
    "revision": "7fb80a94e205a3be0e97af16023aee63"
  }, {
    "url": "packages/dsp/js/566e6fac7ded81855f1d.js",
    "revision": "25ee2586c378af960b6ffde779cc609c"
  }, {
    "url": "packages/dsp/js/59520c3ffa47a43cb833.js",
    "revision": "c389c8ba6e08d39f350ee98465a26cad"
  }, {
    "url": "packages/dsp/js/5df9245c238da4a4c65e.js",
    "revision": "02d2c53ea64ad37b4b1c5bb44a378ec9"
  }, {
    "url": "packages/dsp/js/6c3817caecba29c40ba9.js",
    "revision": "ac1996b978cb560028fbe79f43b8de7d"
  }, {
    "url": "packages/dsp/js/6f0aa6108ac31d9d293e.js",
    "revision": "e4d4c91f7c663017bbbb971721a2b710"
  }, {
    "url": "packages/dsp/js/76cdfa7d6d90f906f826.js",
    "revision": "1c8af54435a79ccce6fb21fae29c75cd"
  }, {
    "url": "packages/dsp/js/78bed74ab6c90673e1b6.js",
    "revision": "4d99d0ab36f6cd640d58fb92645759d4"
  }, {
    "url": "packages/dsp/js/7b13096f6480c9b64a41.js",
    "revision": "1d0a5a2578d6562797eda1e0c3e8a610"
  }, {
    "url": "packages/dsp/js/7b667828b1f1f68b7fdd.js",
    "revision": "7ac8d9cc8acb90d6b709fbe6dba348ed"
  }, {
    "url": "packages/dsp/js/7ec716da07a4d1ec02ed.js",
    "revision": "cb921e3088dad4229b28dab5bdb7ff9c"
  }, {
    "url": "packages/dsp/js/7f2e7c95d94bb7756967.js",
    "revision": "1cb3f31b46c6dd91872cb2862ff98262"
  }, {
    "url": "packages/dsp/js/8140f9f4a99b46a1bc5c.js",
    "revision": "fbfad7629280b80af768f3e3f99c7488"
  }, {
    "url": "packages/dsp/js/86e1dda760e4f0723259.js",
    "revision": "404c421d1f72679e59004535ec9e223b"
  }, {
    "url": "packages/dsp/js/89fc8050207ddcd23e1b.js",
    "revision": "a16c8df37ffde7bb1fdca14f75308ecb"
  }, {
    "url": "packages/dsp/js/8ce43441e8192f99c4a9.js",
    "revision": "bc3882941775c776180bb5aad58fd94b"
  }, {
    "url": "packages/dsp/js/8d999154774832980a82.js",
    "revision": "f74df7d8c5fa91ac7d422060e02bf962"
  }, {
    "url": "packages/dsp/js/9047203c1985fece9fc8.js",
    "revision": "2f393e8bd865ef29382d90b6a5ba8684"
  }, {
    "url": "packages/dsp/js/9101a9979f4ce4f1f14d.js",
    "revision": "3f0380050499ac43aefed647ba21c429"
  }, {
    "url": "packages/dsp/js/91ac41da19a38f77c84e.js",
    "revision": "097968da03c9d3f0774f2f71e4208f87"
  }, {
    "url": "packages/dsp/js/93457af337c77b0e0bd3.js",
    "revision": "285e0bce0ead1c7968dd9ef8288df463"
  }, {
    "url": "packages/dsp/js/9353243215bc0de84983.js",
    "revision": "1f91e70afd1a3b8b4e689e74b9c4781c"
  }, {
    "url": "packages/dsp/js/96dd39bd6be98c8888ce.js",
    "revision": "f36d730a05204b56f82a9eb070114e83"
  }, {
    "url": "packages/dsp/js/9b864930ceb49b36521b.js",
    "revision": "5f9a5a5b68b8b7a6e219ee9fbb999a77"
  }, {
    "url": "packages/dsp/js/a3e83b249ba823cce546.js",
    "revision": "60861bd055087b54dcf920788ab621c1"
  }, {
    "url": "packages/dsp/js/a7d8d8a168ba83e036fb.js",
    "revision": "5e4b31118461debd044a4e38eeb8a361"
  }, {
    "url": "packages/dsp/js/a9424e6939342a36f126.js",
    "revision": "549015eb228b7d5ebcd6fe2431d6cc73"
  }, {
    "url": "packages/dsp/js/ad3ead814821427e53ef.js",
    "revision": "603eba693c605fc859cc7882aac2432f"
  }, {
    "url": "packages/dsp/js/b0e3cb32371252bb4869.js",
    "revision": "fa4a1ec15a5c47193907b3344dd2d147"
  }, {
    "url": "packages/dsp/js/b2f14bc3000a1b641238.js",
    "revision": "1e3f97977ecd8a97fa62ef184146e430"
  }, {
    "url": "packages/dsp/js/b3bece826caa86450e9e.js",
    "revision": "85fb8e85bdc43e8566f99e4c1427870e"
  }, {
    "url": "packages/dsp/js/b7928a3a225815b2798b.js",
    "revision": "4ec8b9e534e9014cfcc11d73401048e4"
  }, {
    "url": "packages/dsp/js/b94d417b259f91304c8d.js",
    "revision": "1d235b70a76f8fd0756bf00ea7f4f858"
  }, {
    "url": "packages/dsp/js/cafe56cbceb7ad260a00.js",
    "revision": "694cbb071756f50587cef9e0b6f9d94a"
  }, {
    "url": "packages/dsp/js/ceb793c4c0589a21cab7.js",
    "revision": "cbaecff43553e8b4eed1a31b0e53c82f"
  }, {
    "url": "packages/dsp/js/d01b54837264c52bf1f4.js",
    "revision": "0171408d7c4f1a3048ec1fd840fe62cb"
  }, {
    "url": "packages/dsp/js/d4e1e7931eda67d94427.js",
    "revision": "9f75dd64fe8b660d1c9f38d15af48308"
  }, {
    "url": "packages/dsp/js/d96a637731e7ee3f8451.js",
    "revision": "ac975b127c235cd7963623516d9dab4f"
  }, {
    "url": "packages/dsp/js/dc2acf5598e3f9530b88.js",
    "revision": "108bf1bf7e0c4bdf2902a02203d174d8"
  }, {
    "url": "packages/dsp/js/dcc8d4127b3045caf0e4.js",
    "revision": "047c74bc417f83feec2ee8f51ef58baa"
  }, {
    "url": "packages/dsp/js/e093628cc3e6ac1f5703.js",
    "revision": "c315f7554da2957286cac205f3a58c8c"
  }, {
    "url": "packages/dsp/js/e1579605d823cde93805.js",
    "revision": "88808d657d2cf3748ac8f1a57d1af301"
  }, {
    "url": "packages/dsp/js/e24cfbc81b220bb510c0.js",
    "revision": "0aeb4570507f053fb782aebe89388c97"
  }, {
    "url": "packages/dsp/js/e26672c503d40f2111d4.js",
    "revision": "e216a93daf70fca55ea2a88ef59be22b"
  }, {
    "url": "packages/dsp/js/e31ac747e32e12fbe13a.js",
    "revision": "10225284f92186b089392dbbb5a6b1a4"
  }, {
    "url": "packages/dsp/js/e33d4407bd2b8d3dc448.js",
    "revision": "12edf10dfdc57503e0908283cc8eb0ee"
  }, {
    "url": "packages/dsp/js/e59fbc64dbabf8bece3d.js",
    "revision": "2b6a328f1994bc4e56fdfc8408936daf"
  }, {
    "url": "packages/dsp/js/e712f4c98963a774b5ae.js",
    "revision": "2216b3c4c0c3050d0a2212d3230ad427"
  }, {
    "url": "packages/dsp/js/eaf6bfdb89fe3b675a68.js",
    "revision": "d3627aa3c2d0381d163b48f4208fa99c"
  }, {
    "url": "packages/dsp/js/eb0fb3b0e585933c48fc.js",
    "revision": "a556f3fc22dc7875d7bdb43e7052db20"
  }, {
    "url": "packages/dsp/js/ed0a39232ed1fbf0c58e.js",
    "revision": "a09b92561fb025c2e0e27901892219fb"
  }, {
    "url": "packages/dsp/js/f39523de16707d695fab.js",
    "revision": "c62738b8c0db415d163528c302347fb3"
  }, {
    "url": "packages/dsp/js/f4ed75a5700751a38c75.js",
    "revision": "38e1a4bb689ecfa965e37a705e4393d9"
  }, {
    "url": "packages/dsp/js/facbf9ea77af396e0dd7.js",
    "revision": "0ab260623e6a91f78d2a6a1bb5b49887"
  }, {
    "url": "packages/dsp/js/fd5f4cf6c927abf10774.js",
    "revision": "52241e791a5b6c80ca5366e735692262"
  }, {
    "url": "packages/dsp/js/fe67ff275178efcc1dae.js",
    "revision": "25e9208f26296b64c6c7c04037106746"
  }, {
    "url": "packages/internal-packages.json",
    "revision": "95e8ad0b02143d69cb4c2fa71d8d14c9"
  }, {
    "url": "packages/live/index.js",
    "revision": "fa6a6a09918e16781ac25b3ea025b4e5"
  }, {
    "url": "packages/live/index.jspatpkg.js",
    "revision": "43376ce25cece0fefc746cbb379fabeb"
  }, {
    "url": "packages/midi/index.js",
    "revision": "83bdb9f4d9c6ee2bb77d3a226d556c38"
  }, {
    "url": "packages/midi/index.jspatpkg.js",
    "revision": "c32b4e9b9eb5c55be87f8ae0948cf5a4"
  }, {
    "url": "packages/op/index.js",
    "revision": "549601486a7aef08ad83b657b6cdc2aa"
  }, {
    "url": "packages/op/index.jsdsppkg.aw.js",
    "revision": "c670096c1a7f9c3bd31673cb0da82dd4"
  }, {
    "url": "packages/op/index.jsdsppkg.main.js",
    "revision": "014457e0532b9ff74c951acc6394d04b"
  }, {
    "url": "packages/op/index.jspatpkg.js",
    "revision": "d0a0f222e40668ef030524bbc5472bea"
  }, {
    "url": "packages/std/index.js",
    "revision": "30a0b4840c53ae78f87ef98780828834"
  }, {
    "url": "packages/std/index.jsdsppkg.aw.js",
    "revision": "69c4faff773988c47539af08760d4604"
  }, {
    "url": "packages/std/index.jsdsppkg.main.js",
    "revision": "c462b3f1f125db1c59e9bbc451d8a24b"
  }, {
    "url": "packages/std/index.jspatpkg.js",
    "revision": "4386082de8ecdd5fc9d1221ed68fba4f"
  }, {
    "url": "packages/ui/index.js",
    "revision": "01d1aa6004f25aa4cb1257a3f0e94574"
  }, {
    "url": "packages/ui/index.jspatpkg.js",
    "revision": "ead45ebae58c74d666978abccca3ec50"
  }, {
    "url": "packages/webaudio/index.js",
    "revision": "d09ab0b6eaf7e9027de37aa17bbc4108"
  }, {
    "url": "packages/webaudio/index.jspatpkg.js",
    "revision": "2fdd10eccba8aabb4fe1bb5f3ae63289"
  }, {
    "url": "src_core_audio_AudioEditor_ts-src_core_audio_AudioRecorder_ts-src_core_audio_PatcherAudio_ts.js/bea5dfb8a3ddf9165f79.worklet.js",
    "revision": null
  }, {
    "url": "src_core_image_ImageEditor_ts.js/bea5dfb8a3ddf9165f79.worklet.js",
    "revision": null
  }, {
    "url": "src_core_image_PatcherImage_ts.js/bea5dfb8a3ddf9165f79.worklet.js",
    "revision": null
  }, {
    "url": "src_core_text_PatcherText_ts.js/bea5dfb8a3ddf9165f79.worklet.js",
    "revision": null
  }, {
    "url": "src_core_text_TextEditor_ts.js/bea5dfb8a3ddf9165f79.worklet.js",
    "revision": null
  }, {
    "url": "src_core_video_PatcherVideo_ts.js/bea5dfb8a3ddf9165f79.worklet.js",
    "revision": null
  }, {
    "url": "src_core_video_VideoEditor_ts.js/bea5dfb8a3ddf9165f79.worklet.js",
    "revision": null
  }, {
    "url": "src_core_worklets_PatcherNode_ts.js/bea5dfb8a3ddf9165f79.worklet.js",
    "revision": null
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=service-worker.js.map
