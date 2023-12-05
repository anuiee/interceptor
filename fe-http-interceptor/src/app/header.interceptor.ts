import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`requst is on its way to ${req.url}`);

  const authReq =req.clone({
    headers : req.headers.set('Authorization','Bearer the token'),
      
   
  });
  
 return next(authReq);



  //    console.log('req',req);
  // const modifiedRequest = req.clone({
  //   setHeaders: {
  //     'X-Custom-Header': 'MyCustomHeaderValue',
  //   },
  // });
  // console.log(modifiedRequest);
  // return next(modifiedRequest);
    // return next(req);
};
