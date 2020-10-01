# cost-explorer

get aws cost at yesterday

```sh
aws ce get-cost-and-usage \
    --region us-east-1 \
    --time-period Start=`date '+%Y-%m'`-01,End=`date -d 'next month' '+%Y-%m'`-01 \
    --granularity MONTHLY \
    --metrics BlendedCost \
    --group-by Type=DIMENSION,Key=SERVICE \
    | jq -r '.ResultsByTime[].Groups[] | [(.Keys[]), .Metrics.BlendedCost.Amount] | @csv'
# BlendedCost - UnblendedCost
# BlendRate = RIを前払いで購入したので、あなたのアカウントの1CPU時間あたりいくらだよ、を示す。
# UnblendRate = RIを前払いで購入したので、購入したインスタンスの1CPU時間あたりいくらだよ、を示す。
# 会計上どのインスタンスにいくらかかっている、という表現のためにはブレンドコストが役立つ。
# そうではなく、RIのために実際にお金がかかっているインスタンスを探したいときは非ブレンドコストが役立つ。
# どちらの場合でも、合計のコストは変わらない（したがって、組織単位かつインスタンス合算でコストを表示する場合はどちらでも同じこと）
```