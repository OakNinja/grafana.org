describe("Modernizr Base",function(){var e,n;before(function(t){define("package",[],function(){return{}});var r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});r(["Modernizr","cleanup"],function(r,c){e=r,n=c,t()})}),it("should return an object",function(){expect(e).to.be.an("object")}),after(function(){n()})});