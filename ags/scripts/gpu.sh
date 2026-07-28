# !/bin/sh
while true; do
  nvidia-smi --query-gpu=utilization.gpu --format=csv,noheader,nounits | awk '{print $1"%"}'
  sleep 1
done