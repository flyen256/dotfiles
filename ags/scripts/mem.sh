#!/bin/sh

while true; do
  awk '
    /MemTotal/ {t=$2}
    /MemAvailable/ {a=$2}
    END {printf "%.1i%%\n", (t-a)/t*100}
  ' /proc/meminfo
  sleep 1
done
