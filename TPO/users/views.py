from django.shortcuts import render

# Create your views here.
from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.urls import reverse
from users.forms import CustomUserCreationForm
from django.views.generic import CreateView, ListView, UpdateView
from users.forms import CustomerSignUpForm
from users.models import User
from django.views.generic.edit import FormView
from django.urls import reverse_lazy


def dashboard(request):
    return render(request, "users/dashboard.html")

# new
def register(request):
    if request.method == "GET":
        return render(request, "users/register.html",{"form": CustomUserCreationForm})
    elif request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse("dashboard"))

class CustomerSignUpView(CreateView):
    form_class = CustomerSignUpForm
    model = User
    template_name = 'users/customer_signup.html'
    
    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'customer'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('dashboard')