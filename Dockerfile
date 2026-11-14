# Programming Journey: web + server, který spouští C++ (g++) a Python.
FROM python:3.12-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends g++ \
 && g++ --version \
 && rm -rf /var/lib/apt/lists/* \
 && useradd --uid 10001 --no-create-home --shell /usr/sbin/nologin runner

# Sestavení webu C++dexu
COPY cpp/cppdex /build/cppdex
RUN cd /build/cppdex && python3 build.py \
 && mkdir -p /app/static && cp cppdex.html /app/static/index.html \
 && rm -rf /build

COPY app/server.py /app/server.py

ENV PORT=8080 STATIC_DIR=/app/static RUN_UID=10001 PYTHONUNBUFFERED=1
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s CMD python3 -c "import urllib.request;urllib.request.urlopen('http://127.0.0.1:8080/api/health')"
CMD ["python3", "/app/server.py"]
