# RestApi.StudentsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**studentAllGet**](StudentsApi.md#studentAllGet) | **GET** /student/all | 
[**studentIdGet**](StudentsApi.md#studentIdGet) | **GET** /student/{id} | 



## studentAllGet

> studentAllGet()



### Example

```javascript
import RestApi from 'rest_api';

let apiInstance = new RestApi.StudentsApi();
apiInstance.studentAllGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## studentIdGet

> studentIdGet(id)



### Example

```javascript
import RestApi from 'rest_api';

let apiInstance = new RestApi.StudentsApi();
let id = "id_example"; // String | 
apiInstance.studentIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

