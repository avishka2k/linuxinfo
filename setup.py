from setuptools import setup, find_packages

setup(
    name='my_flask_app',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'Flask',
    ],
)
