//Dependencies
const SJN = require("../index.js")

//Main
describe("Convert string json to json", ()=>{
    it("should be json", ()=>{
        expect(SJN.normalize('{ test: "test" }')).toHaveProperty("test")
    })
})