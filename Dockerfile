ARG MAKE_PYTHON_VERSION
ARG DOCKER_BUILD_ENV
FROM python:${TRAVIS_PYTHON_VERSION:-3.11}-bookworm

WORKDIR /usr/src/app

ENV CURL_FLAGS="--proto =https --tlsv1.2 -sSf -L --max-redirs 1 -O"

# Copy files
COPY yarn.lock /usr/src/app/
COPY requirements.txt dev-requirements.txt /usr/src/app/
COPY package.json /usr/src/app/
COPY test_data.py /usr/src/app/
COPY mypy.ini /usr/src/app/

EXPOSE 3000

ENV PATH="C:\usr\src\app\geckodriver;$env:PATH"
ENV SECRET_KEY 4Q6ZaQQdiqtmvZaxP1If
ENV SQLALCHEMY_DATABASE_URI postgresql://openoversight:terriblepassword@postgres/openoversight-dev

CMD ["OpenOversight/scripts/entrypoint_dev.sh"]
