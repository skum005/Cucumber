package com.exercises;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HousewifeNeeds {

	@Given("^I am a working \"([^\"]*)\"$")
	public void whatAmI(String type) {
		System.out.println("You are a " + type);
	}

	@When("^I give \"([a-zA-Z]{1,})\"$")
	public void myOrder(String type) {
		System.out.println("when i give " + type);
	}
	
	@Then("^my husband should get \"([^\"]*)\"$")
	public void myHusbandReaction(String type){
		System.out.println("My husband reaction is " + type);
	}
	
	@And("^he should \"([^\"]*)\" to me$")
	public void myExpectation(String  type){
		System.out.println("My expectation" + type);
	}
	
	@But("^he is also \"([^\"]*)\"$")
	public void innerFeeling(String type){
		System.out.println("His inner feeling" + type);
	}

}
