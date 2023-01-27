from django.shortcuts import render

# Create your views here.
from django.contrib.auth import login
from django.shortcuts import redirect, render,get_object_or_404
from django.urls import reverse
from users.forms import CustomUserCreationForm
from django.views.generic import CreateView, ListView, UpdateView
from users.forms import CustomerSignUpForm, StoreSignUpForm, DeliverySignUpForm,CustomPasswordResetForm,StoreEvaluationForm
from users.models import User,Store
from django.views.generic import TemplateView
from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect
from django.contrib.auth.views import PasswordResetView
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
import logging
logger = logging.getLogger(__name__)

def dashboard(request):
    return render(request, "users/dashboard.html")

def about(request):
    return render(request, "users/about.html")
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

def CustomerSignUpView(request):
    if request.method == "POST":
        form = CustomerSignUpForm(request.POST, files= request.FILES)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse('dashboard'))
        else:
            print(form.errors)
    else:
        return render(request, "users/customer_signup.html",{"form": CustomerSignUpForm})
        

def signup(request):
    return render(request, "registration/signup.html")


def StoreSignUpView(request):
    if request.method == "POST":
        form = StoreSignUpForm(request.POST, files= request.FILES)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse('dashboard'))
        else:
            print(form.errors)
    else:
        return render(request, "users/store_signup.html",{"form": StoreSignUpForm})



class CustomPasswordResetView(PasswordResetView):
    form_class = CustomPasswordResetForm
    success_url = reverse_lazy('resetPasswordDone')
    template_name = 'registration/password_reset_form.html'

class PasswordResetDoneView(TemplateView):
    template_name = 'registration/password_reset_done.html'

def DeliverySignUpView(request):
    if request.method == "POST":
        form = DeliverySignUpForm(request.POST, files= request.FILES)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse('dashboard'))
        else:
            print(form.errors)
    else:
        return render(request, "users/Delivery_signup.html",{"form": DeliverySignUpForm})

def evaluate_store(request, store_id):
    store = get_object_or_404(Store, pk=store_id)
    if request.method == 'POST':
        form = StoreEvaluationForm(request.POST)
        if form.is_valid():
            evaluation = form.save(commit=False)
            evaluation.store = store
            evaluation.user = request.user
            evaluation.save()
            return redirect('store_detail', store_id=store.id)
    else:
        form = StoreEvaluationForm()
    return render(request, 'stores/evaluate.html', {'form': form, 'store': store})

def userprofile(request):
    profile = CustomerSignUpForm()
    return render(request, "users/user_profile.html", {"profile": profile})


# Example usage in a view function
def my_view(request):
    # some code here
    logger.debug("This is a debug message.")
    logger.info("This is an info message.")
    logger.warning("This is a warning message.")
    logger.error("This is an error message.")
    return HttpResponse("Hello World!")


