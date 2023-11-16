# RestApi.CoursesApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**courseAllGet**](CoursesApi.md#courseAllGet) | **GET** /course/all | 
[**courseIdGet**](CoursesApi.md#courseIdGet) | **GET** /course/{id} | 



## courseAllGet

> courseAllGet()



### Example

```javascript
import RestApi from 'rest_api';

let apiInstance = new RestApi.CoursesApi();
apiInstance.courseAllGet((error, data, response) => {
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


## courseIdGet

> courseIdGet(id)



### Example

```javascript
import RestApi from 'rest_api';

let apiInstance = new RestApi.CoursesApi();
let id = "id_example"; // String | 
apiInstance.courseIdGet(id, (error, data, response) => {
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

