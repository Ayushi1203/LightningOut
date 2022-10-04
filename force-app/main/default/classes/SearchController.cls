public with sharing class SearchController {

    @AuraEnabled(Cacheable = true)
    public static List<Account> SearchByName(String searchKey) {
        String name =  + searchKey + '%';
        return [SELECT id, name, phone, Website FROM Account WHERE name LIKE :name];
    }
   
}