describe('Angularjs Homepage Todo list', function () {

    beforeEach(function () {
        browser.get(browser.baseUrl);
    });
    //if you predefine 'xit' instead of 'it', the test will not be run
    it('Navigate First Time', function () {

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
    it('Navigate 2nd Time', function () {
        console.log("In 2nd Time Now");

    });

    afterEach(function () {
        browser.sleep(3000);
    })
});