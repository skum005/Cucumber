package com.basics;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataTableExample {

	@Given("^I am a \"([^\"]*)\"$")
	public void whenMethod(String a) {
		System.out.println("It does nothing");
	}
	
	@When("^I was asked to learn \"([^\"]*)\"$")
	public void givenMethodRun(String a, DataTable table) {
		List<Map<String, String>> listOfTables = table.asMaps(String.class,String.class);

        System.out.println(listOfTables.get(0).get("Type"));
        System.out.println(listOfTables.get(0).get("Status"));
        
        System.out.println(listOfTables.get(1).get("Type"));
        System.out.println(listOfTables.get(1).get("Status"));
        
        		

		/*Iterator<String> it = listOfTables.iterator();
		while(it.hasNext()){
			System.out.println(it.next());
		}*/
	}

	@Then("^I have created this \"([^\"]*)\"$")
	public void thenMethod(String a) {
		System.out.println("It does nothing1");
	}

	@And("^I have been \"([^\"]*)\"$")
	public void andMethod(String a) {
		System.out.println("It does nothing2");
	}

	@But("^I may end up seeing \"([^\"]*)\"$")
	public void butMethod(String a) {
		System.out.println("It does nothing3");
	}
}
