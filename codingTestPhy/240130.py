# 파이썬 다 까먹었다 ㅎㅎ
# 1. 영식 요금제 (30초에 10원 ),2. 민식 요금제(60초 마다 15원) 

# 통화 개수 n 통화 시간 time

n = input() #통화 개수
time=list(map(int, input().split())) #통화시간 

#영식 요금제 계산하는 함수 
def younsink(n , time): 
    k=0
    for i in time:
       k = k + i // 30
    return k*10
3
print (younsink(n,time))

#민식 요금제 계산 하는 함수 
def minsick(n,time):
    k=0
    for i in time:
       k = k + i // 60
    return k*15

