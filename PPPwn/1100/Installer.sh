apt-get update 
apt-get upgrade 

apt install python3 
python3 --version

apt install python3-pip 
pip3 --version

apt install git
git —version

apt install gcc
gcc --version

git clone --recursive https://github.com/TheOfficialFloW/PPPwn
cd PPPwn
pip install -r requirements.txt ﻿--break-system-packages
make -C stage1 FW=1100 clean && make -C stage1 FW=1100
make -C stage2 FW=1100 clean && make -C stage2 FW=1100