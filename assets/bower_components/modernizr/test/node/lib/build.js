var root=require("find-parent-dir").sync(__dirname,"package.json"),build=require(root+"lib/build"),expect=require("expect.js");describe("cli/build",function(){it("should build without error",function(){expect(function(){build()}).to.not.throwError()}),describe("custom builds",function(done){it("should build without errors when using a custom build",function(){expect(function(){build({"feature-detects":["css/boxsizing"]},done)}).to.not.throwError()}),it("should include the requested options",function(t){build({"feature-detects":["css/boxsizing"]},function(e){expect(e).to.contain("boxsizing"),t()})}),it("should exclude options that are not requested",function(t){build({"feature-detects":["dom/classlist"]},function(e){expect(e).to.contain("classlist"),expect(e).to.not.contain("boxsizing"),t()})}),it("should strip out DOC comments when `uglify`ing",function(t){var e={minify:!0,"feature-detects":["css/boxsizing"]};build(e,function(e){expect(e).to.not.contain("Box Sizing"),t()})}),it("should inject the proper classPath when configured",function(t){var e="TEST_PREFIX",n={classPrefix:e,setClasses:!0},i=/_config:\s*?({[^}]*})/m;build(n,function(n){var r=n.match(i);r=JSON.parse(r[1].replace(/'/g,'"')),expect(r.classPrefix).to.be(e),t()})}),it("should inject the proper classPath when configured and minified",function(done){var prefix="TEST_PREFIX",config={classPrefix:prefix,setClasses:!0,minify:!0},configRE=/_config:\s*?({[^}]*})/m;build(config,function(file){var parsedConfig=file.match(configRE);parsedConfig=eval("("+parsedConfig[1].replace(/'/g,'"')+")"),expect(parsedConfig.classPrefix).to.be(prefix),done()})}),describe("unminified",function(){var t;before(function(e){var n={"feature-detects":["css/boxsizing"]};build(n,function(n){t=n,e()})}),it("strips out the modernizr-init/build `define` section",function(){var e=/define\("modernizr-(init|build)"\)/m;expect(e.test(t)).to.be(!1)}),it("strips out the `define` section",function(){var e=/define\(.*?\{/;expect(e.test(t)).to.be(!1)}),it("strips out the `require` section",function(){var e=/require[^\{\r\n]+\{/;expect(e.test(t)).to.be(!1)}),it("replaces __VERSION__ ",function(){expect(t).to.not.contain("__VERSION__")})}),describe("minified",function(){var t;before(function(e){var n={"feature-detects":["css/boxsizing"],minify:!0};build(n,function(n){t=n,e()})}),it("strips out the modernizr-init/build `define` section",function(){var e=/define\("modernizr-(init|build)"\)/m;expect(e.test(t)).to.be(!1)}),it("strips out the `define` section",function(){var e=/define\(.*?\{/;expect(e.test(t)).to.be(!1)}),it("strips out the `require` section",function(){var e=/require[^\{\r\n]+\{/;expect(e.test(t)).to.be(!1)}),it("replaces __VERSION__ ",function(){expect(t).to.not.contain("__VERSION__")})})})});