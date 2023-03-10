package com.nopcommerce.demo.pages;

import com.aventstack.extentreports.Status;
import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement loginLink;

    @CacheLookup
    @FindBy(linkText = "Register")
    WebElement registerLink;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement logo;

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-account']")
    WebElement myAccountLink;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Log out']")
    WebElement logOutLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='header-menu']/child::ul[1]/li/a")
    List<WebElement> topMenuList;


    public void clickOnLoginLink() {
        log.info("Click on login link : " + loginLink.toString());
        clickOnElement(loginLink);
    }

    public boolean isLogInLinkDisplay() {
        boolean b = loginLink.isDisplayed();
        log.info("Check login link is displayed : " + loginLink.toString());
        return b;
    }

    public void clickOnRegisterLink() {
        log.info("Click on register link : " + registerLink.toString());
        clickOnElement(registerLink);
    }

    public void clickOnMyAccountLink() {
        log.info("Click on my account link : " + myAccountLink.toString());
        clickOnElement(myAccountLink);
    }

    public HomePage clickOnLogOutLink() {
        log.info("Click on log out link : " + logOutLink.toString());
        clickOnElement(logOutLink);
        return new HomePage();
    }

    public boolean isLogOutLinkDisplay() {
        boolean b = logOutLink.isDisplayed();
        log.info("Check logout link is displayed : " + logOutLink.toString());
        return b;
    }

    public boolean isLogoDisplayed() {
        boolean b = logo.isDisplayed();
        log.info("CHeck logo is displayed : " + logo.toString());
        return b;
    }

    public void clickOnMenuTab(String tab) {
        for (WebElement menu : topMenuList) {
            if (menu.getText().contains(tab)) {
                log.info("Click on menu tab : " + topMenuList.toString());
                clickOnElement(menu);
                break;
            }
        }
    }
}
