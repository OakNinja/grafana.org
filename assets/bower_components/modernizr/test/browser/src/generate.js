describe("generate",function(){var generate,cleanup;before(function(e){define("package",[],function(){return{}}),define("Modernizr",[],function(){return{}}),define("testRunner",[],function(){return{}}),define("lodash",[],function(){return window._}),define("ModernizrProto",[],function(){return{}});var t=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});t(["generate","cleanup"],function(t,n){generate=t,cleanup=n,e()})}),it("is a function",function(){expect(generate).to.be.a("function")}),it("does not blow up when no config is given",function(){expect(function(){generate()}).to.not.throwError()}),it("defines `feature-detects` if it is not on the config already",function(){var e={};generate(e),expect(e["feature-detects"]).to.not.be(void 0)}),it("does not overwrite `feature-detects` if it is defined already",function(){var e={"feature-detects":["fake"]};generate(e),expect(e["feature-detects"][0]).to.be("fake")}),describe("outputs feature detects when they are requested",function(){it("with amd prefix",function(){var e={"feature-detects":["test/fake"]},t=generate(e);expect(t).to.contain("test/fake")}),it("without amd prefix",function(){var e={"feature-detects":["fake"]},t=generate(e);expect(t).to.contain("test/fake")})}),it("adds `setClasses` and `classes` when defined",function(){var e={options:["setClasses"]},t=generate(e);expect(t).to.contain('setClasses", "classes')}),it("adds options when defined",function(){var e={options:["fakeOption"]},t=generate(e);expect(t).to.contain("fakeOption")}),it("only adds one of the shivs if both are defined",function(){var e={options:["html5shiv","html5printshiv"]},t=generate(e);expect(t).to.contain("html5printshiv"),expect(t).to.not.contain("html5shiv")}),it("outputs a valid function",function(){var output=generate({}),stashedRequire=window.require;window.require=function(){},expect(function(){eval(output)}).to.not.throwError(),window.require=stashedRequire}),it("outputs a valid function when minified",function(){var output=generate({minify:!0}),stashedRequire=window.require;window.require=function(){},expect(function(){eval(output)}).to.not.throwError(),window.require=stashedRequire}),after(function(){cleanup()})});