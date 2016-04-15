package com.basics;

import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DeveloperClass {

	@Given("^I am working at \"([^\"]*)\"$")
	public void myDev(String type) {
		System.out.println("Working at MS " + type);
	}

	@When("^I see my boss \"([^\"]*)\"$")
	public void myDev1(String type) {
		System.out.println("Seeing BG " + type);
	}

	@Then("^I get \"([^\"]*)\"$")
	public void myDev2(String type) {
		System.out.println("Excitement " + type);
	}

	/*  \"([^\"]*)\"  */
	
	@But("^he is \"([^\"]*)\"$")
	public void myDev3(String type) {
		System.out.println(type);
	}
}
