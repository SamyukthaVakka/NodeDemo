const assert = require('assert');
let webdriver = require('selenium-webdriver')
let chrome = require('selenium-webdriver/chrome');
 
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
describe('Simple Test', () => {
 it('should check the text Hello', () => {
     driver.navigate('http://127.0.0.1:3000/')
     driver.getTitle().then(function( title ) {
        console.log(title)
    });
    });
});