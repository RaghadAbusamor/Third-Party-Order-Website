from django.urls import path,include
from users.views import dashboard,register,CustomerSignUpView #,SignUpView,StoreSignUpView,DeliverySignUpView
urlpatterns = [
    path("dashboard/", dashboard, name="dashboard"),
    path('accounts/signup/customer/', CustomerSignUpView, name='customer_signup'),
    path("accounts/", include("django.contrib.auth.urls")),
    #path('oauth/', include('social_django.urls', namespace="social")),
    #path('accounts/signup/', SignUpView.as_view(), name='signup'),
    
    #path('accounts/signup/store/', StoreSignUpView.as_view(), name='store_signup'),
    #path('accounts/signup/delivery/', DeliverySignUpView.as_view(), name='delivery_signup'),
    path("register/", register, name="register"),
]