from rest_framework.test import APIClient, APITestCase


class TestUserAccess(APITestCase):
    def setUp(self):
        self.client = APIClient()
