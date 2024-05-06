sudo apt-get update 
sudo apt-get upgrade 

sudo apt install python3 
python3 --version

sudo apt install python3-pip 
pip3 --version

sudo apt install git
git —version

sudo apt install gcc
gcc --version

git clone --recursive https://github.com/TheOfficialFloW/PPPwn
cd PPPwn
sudo pip install -r requirements.txt ﻿--break-system-packages
make -C stage1 FW=1100 clean && make -C stage1 FW=1100
make -C stage2 FW=1100 clean && make -C stage2 FW=1100