#!/bin/sh
while true; do
  awk '
  NR==1 {
    u1=$2+$4
    t1=$2+$4+$5
    system("sleep 0.2")
    getline < "/proc/stat"
    u2=$2+$4
    t2=$2+$4+$5
    printf "%.1i%%", (u2-u1)/(t2-t1)*100
    exit
  }' /proc/stat
  echo
  sleep 0.5
done