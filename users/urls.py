from django.urls import path,include
from users.views import dashboard,register,CustomerSignUpView, about, signup, StoreSignUpView#,SignUpView,StoreSignUpView,DeliverySignUpView
urlpatterns = [
    path("", dashboard, name="dashboard"),
    path('accounts/signup/customer/', CustomerSignUpView, name="CustomerSignUpView"),
    path("accounts/signup/", signup , name="signup"),
    path('accounts/signup/store/', StoreSignUpView, name="StoreSignUpView"),
    path("accounts/", include("django.contrib.auth.urls")),
    #path('oauth/', include('social_django.urls', namespace="social")),
    #path('accounts/signup/delivery/', DeliverySignUpView.as_view(), name='delivery_signup'),
    path("register/", register, name="register"),
    path("about/",about, name="about"),
    
]
