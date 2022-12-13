# users/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.db import transaction
from users.models import Customer, Store, Delivery,User
from django.core.exceptions import ValidationError 
from django.core.validators import RegexValidator

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        fields = UserCreationForm.Meta.fields + ("email",)

class CustomerSignUpForm(UserCreationForm):
    password1 = forms.CharField(label='password', widget=forms.PasswordInput)  
    password2 = forms.CharField(label='Confirm password', widget=forms.PasswordInput)  
    phone_number = forms.CharField(max_length=16, validators=[
        RegexValidator(
            regex=r'^\+\d{8,15}$',
            message='Invalid phone number',
            code='invalid_phone_number'
        )
    ])
    age = forms.IntegerField(min_value = 13, max_value= 200)
    image = forms.ImageField()
    location = forms.CharField(max_length=50)
    
    def username_clean(self):  
        username = self.cleaned_data['username'].lower()  
        new = User.objects.filter(username = username)  
        if new.count():  
            raise ValidationError("User Already Exist")  
        return username  

    def email_clean(self):  
        email = self.cleaned_data['email'].lower()  
        new = User.objects.filter(email=email)  
        if new.count():  
            raise ValidationError(" Email Already Exist")  
        return email  

    def clean_password2(self):  
        password1 = self.cleaned_data['password1']  
        password2 = self.cleaned_data['password2']  
        if password1 and password2 and password1 != password2:  
            raise ValidationError("Password don't match")  
        return password2  

    class Meta:
        model = User
        fields = ('username', 'password1', 'password2', 'email','phone_number','age','image','location')

    def save(self, commit=True):
        user = super(CustomerSignUpForm, self).save(commit=False)
        user.is_customer = True
        if commit:
            user.save()
            customer = Customer(user=user,age = self.cleaned_data['age'])
            customer.save()
        return user
