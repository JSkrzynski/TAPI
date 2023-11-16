# RestApi.RoomsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roomAllGet**](RoomsApi.md#roomAllGet) | **GET** /room/all | 



## roomAllGet

> roomAllGet()



### Example

```javascript
import RestApi from 'rest_api';

let apiInstance = new RestApi.RoomsApi();
apiInstance.roomAllGet((error, data, response) => {
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

