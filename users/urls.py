from django.urls import path,include
from users.views import dashboard,register,CustomerSignUpView,DeliverySignUpView, about, signup, StoreSignUpView,CustomPasswordResetView, PasswordResetDoneView, profile,my_view,store_evaluation_view#,SignUpView,StoreSignUpView,DeliverySignUpView,
app_name = 'users'
urlpatterns = [
    path("", dashboard, name="dashboard"),
    path('accounts/signup/customer/', CustomerSignUpView, name="customer_signup"),
    path("accounts/signup/", signup , name="signup"),
    path('accounts/signup/store/', StoreSignUpView, name="store_signup"),
    path('accounts/signup/delivery/', DeliverySignUpView, name="delivery_signup"),
    path("accounts/resetPassword/",  CustomPasswordResetView.as_view(), name="resetPassword"),
    path("accounts/resetPassword/done", PasswordResetDoneView.as_view(), name="resetPasswordDone"),
    path("accounts/", include("django.contrib.auth.urls")),
    path('accounts/login/profile/', profile, name='profile'),
    path('profile/evaluate/', store_evaluation_view, name='store_evaluation'),
    #path('oauth/', include('social_django.urls', namespace="social")),
    path("register/", register, name="register"),
    path("about/",about, name="about"),
    path('my_view/', my_view, name='my_view'),
    
]
