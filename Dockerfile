FROM fedora:23
RUN dnf update -y
RUN dnf groups install -y "C Development Tools and Libraries"
RUN dnf install -y ruby
RUN dnf install -y ruby-devel redhat-rpm-config
RUN gem install bundler
RUN mkdir /app/
COPY . /app/
RUN cd /app/ && bundle
CMD cd /app/ && bin/foreman start frontend=1,backend=0
