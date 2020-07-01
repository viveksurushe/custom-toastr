# custom-toastr
Custom toastr to show notifications

## Features
```
- Toast the message on screen.
- Allow innerHtml.
- Allow conditional open and close.
- Lightweight.
- Can be placed anywhere on the webpage.
- 4 built-in toast types: success, info, warning and error.
- Custom show/hide animations.
- Auto dismiss with.
```

## Dependencies
```
- rxjs
```

### Add `<app-toastr></app-toastr>` selector into your root component (app.component.html)
```
<root-component></root-component>
<am-toaster></am-toaster>
```

### Inject `toastrService` into your components to Use
```
this.toastrService.show(TYPE, 'this is dummy content', 'Title')

this.toasterId = this.toastrService.open(TYPE,'this is dummy content', 'Title');
this.toastrService.close(this.toasterId);
```
