import { Builder, By, Key, ThenableWebDriver, until } from "selenium-webdriver";
import { expect } from "chai";
import "mocha";

let driver: ThenableWebDriver;
const url = "https://staging.prepnow.app";
const timeout = 20000;

describe("HomePage", function () {
  this.timeout(timeout);

  beforeEach(() => {
    driver = new Builder().forBrowser("firefox").build();
    driver.manage().window().setRect({ width: 1600, height: 1200 });
    driver.get(url);
  });

  afterEach(() => {
    driver.close();
    driver.quit();
  });

  it("renders to the DOM", async () => {
    const sectionStatistics = await driver.wait(
      until.elementLocated(By.id("statistics"))
    );
    const scrollDown = await driver.wait(
      until.elementLocated(By.xpath("//a[@aria-label='Scroll down']"))
    );

    const initPos: number = await driver.executeScript(
      "return window.pageYOffset"
    );

    await scrollDown.click();
    expect(initPos).equal(0);

    await driver.wait(until.elementIsVisible(sectionStatistics));
    const newPos = await driver.executeScript("return window.pageYOffset");
    expect(newPos).greaterThan(initPos);
  });
});
