let { flowerShop } = require("./flowerShop.js");
let {expect} = require('chai');

describe('flowerShop tests',()=>{
    describe('calcPriceOfFlowers function tests',()=>{
        it('Should throw an error if input is wrong - 1st is int',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers(3,3,3)).to.throw(Error,'Invalid input!')
        })
        it('Should throw an error if input is wrong - 2nd is string',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers(3,'3',3)).to.throw(Error,'Invalid input!')
        })
        it('Should throw an error if input is wrong - 3rd is string',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers(3,3,'3')).to.throw(Error,'Invalid input!')
        })
        it('Should throw an error if input is wrong - no input',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers()).to.throw(Error,'Invalid input!')
        })
        it('Should return correct answer',()=>{
            expect(flowerShop.calcPriceOfFlowers('a',2,3)).to.equal(`You need $6.00 to buy a!`)
        })
    })
    describe('checkFlowersAvailable function tests',()=>{
        it('Should return - the flowers are avaiable!',()=>{
            expect(flowerShop.checkFlowersAvailable('a',['b','a','c'])).to.equal('The a are available!')
        })
        it('Should return - the flowers are not avaiable!',()=>{
            expect(flowerShop.checkFlowersAvailable('d',['b','a','c'])).to.equal('The d are sold! You need to purchase more!')
        })
    })
    describe('sellFlowers function tests',()=>{
        it('Should throw an error if input is incorrecet - 1st is string',()=>{
            expect(()=>flowerShop.sellFlowers('a',3)).to.throw(Error, 'Invalid input!')
        })
        it('Should throw an error if input is incorrecet - 2nd is string',()=>{
            expect(()=>flowerShop.sellFlowers(['a','b','c'],'3')).to.throw(Error, 'Invalid input!')
        })
        it('Should throw an error if space is < 0',()=>{
            expect(()=>flowerShop.sellFlowers(['a','b','c'],-1)).to.throw(Error, 'Invalid input!')
        })
        it('Should throw an error if space > arr.length',()=>{
            expect(()=>flowerShop.sellFlowers(['a','b','c'],4)).to.throw(Error, 'Invalid input!')
        })
        it('Should return correct answer',()=>{
            expect(flowerShop.sellFlowers(['a','b','c'],2)).to.equal('a / b')
        })

    })
})
