package com.basics;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestClass {
	@Given("^I am \"([a-zA-Z]{1,})\" tester$")
	public void testMyStuff(String type){
		System.out.println(type +" I am good tester and I face you");
	}
	
	@When("^I go to office$")
	public void testMyStuff1(){
		System.out.println("I am at office dude - executing when scenario");
	}
	
	@Then("^I see lot of \"([a-zA-Z]{1,})\" work$")
	public void testMyStuff2(String type){
		System.out.println(type + " I am gonna face all the challenges");
	}
	
	/*@And("^I find it \"([a-zA-Z]{1,})\"$")
	public void testMyStuff3(String type){
		System.out.println(type + " I am getting inspired!");
	}*/
	
	@And("^I find it \"([^\"]*)\"$")
	public void testMyStuff3(String type){
		System.out.println(type + " I am getting inspired!");
	}
	
	@But("^sometimes it is \"([a-zA-Z]{1,})\"$")
	public void testMyStuff4(String type){
		System.out.println(type + " Sometimes it is boring dude");
	}

}
