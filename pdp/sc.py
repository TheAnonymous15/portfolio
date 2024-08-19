from decouple import config

# Test fetching a sample environment variable
print(config('DB_NAME', default='default_db_name'))
